var Config = {
    LoadConfig: function(state, val) {
        state.Content.Curr.SystemSwitches.Switches = JSON.parse(val);
        return state;
    }
}

export default Config;
