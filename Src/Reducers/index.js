import initialState from "../Store/initialState.js";
import control from "../Components/Dashboard/App/Container/SideBar/SBSwitchContainer/Switch/Reducers.js";
import tab from "../Components/Dashboard/App/Container/Main/Tab/Reducers.js";
import config from "./config.js";

let reducers = {};
for(let i in control) reducers[i] = control[i];
for(let i in tab) reducers[i] = tab[i];
for(let i in config) reducers[i] = config[i];

export const rootReducer = (state = initialState, action) => {
    let newState = Object.assign({}, state);

    try {
        return reducers[action.type](newState, action.value);
    } catch (err) {
        return newState;
    }
};
