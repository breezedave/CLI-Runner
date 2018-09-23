const {ipcRenderer} = require('electron');
const Tab = {
    SetConsole: (state, value) => {
        state.Content.Curr.SystemSwitches.CurrSwitch = value;

        return state;
    }
};

export default Tab;
