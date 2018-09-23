const {ipcMain} = require('electron');
let commands = {};

ipcMain.on('cmd', (event, arg) => {
    let cli = commands[arg.name] = commands[arg.name] || {};

    if(arg.value === "off") {
        if(typeof cli.process !== "undefined") {
            cli.process.kill();
            event.sender.send('async', {
                name: arg.name,
                type: "stop",
                val: "stop"
            })
            delete commands[arg.name].process;
        }
    }

    if(arg.value === "on") {
        if(typeof cli.process === "undefined") {
            cli.process = require('child_process').exec(arg.cmd);
        }
        event.argName = arg.name;
        commands[arg.name].pid = cli.process.pid;
        cli.process.stdout.on('data', function (data, arg) {
            event.sender.send('async', {
                name: event.argName,
                type: "stdout",
                val: data.toString('utf8')
            });
        });
        cli.process.stderr.on('data', function (data) {
            event.sender.send('async', {
                name: event.argName,
                type: "stderr",
                val: data.toString('utf8')
            })
        });
        cli.process.on('close', function (code) {
            delete commands[event.argName].process;
            if (code == 0) {
                event.sender.send('async', {
                    name: event.argName,
                    type: "exit",
                    val: "exit"
                })
            } else {
                event.sender.send('async', {
                    name: event.argName,
                    type: "start",
                    val: "start"
                })
            }
        });
    }
})
