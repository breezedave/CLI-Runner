import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import App from "./Components/Dashboard/App/App.jsx";

window.store = store;

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>
    , document.getElementById("root")
);

require('electron')
    .ipcRenderer
    .on('config', (event, message) => {        
        window.store.dispatch({
            type: "LoadConfig",
            value: message
        });
})
