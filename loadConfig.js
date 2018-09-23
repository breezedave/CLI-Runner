const fs = require("fs");
const filepath = "C:/dev/MI_Project/Deployment/Builds.json";

class LoadConfig {
    constructor(win) {
        fs.readFile(filepath, 'utf-8', (err, data) => {
            if(err){
                alert("Builds.json file was not found at " + filepath +".")
                return;
            }

            win.webContents.send('config', data);
        });
    }
}

module.exports = LoadConfig;
