const {ipcRenderer} = require('electron');
const Switch = {
    SetFilter: (state, value) => {
        let thisFilter = state.Content.Curr.SystemSwitches.Switches[value.name]
        const newVal = value.val === "on" ? "off" : "on";

        thisFilter.value = newVal;

        ipcRenderer.send(
            'cmd', {
                name: thisFilter.text,
                cmd: thisFilter.startCmd,
                value: newVal
            }
        );

        return state;
    },
    UpdateConsole: (state, value) => {
        let thisFilter = state.Content.Curr.SystemSwitches.Switches[value.name]

        thisFilter.console += value.val;

        return state;
    }
};

ipcRenderer.on('async', (event, arg) => {
    window.store.dispatch({
        type: "UpdateConsole",
        value: {
            name: arg.name,
            val: arg.val + "\n"
        }
    });
});

export default Switch;
