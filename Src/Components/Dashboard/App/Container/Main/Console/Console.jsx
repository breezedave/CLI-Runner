import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Console.scss";

const mapStateToProps = (state) => {
    try {
        let systemSwitch = state.Content.Curr.SystemSwitches.CurrSwitch;
        let console = state.Content.Curr.SystemSwitches.Switches[systemSwitch].console;

        return {
            console: console,
            json: JSON.stringify(state.Content.Curr.SystemSwitches.Switches)
        };
    } catch (err) {
        return {
            console: "",
            json: ""
        }
    }
};

const ConsoleObj = ({
    console, json
}) => {
    return (
        <div className="Console">
            <pre>{console}</pre>
        </div>
    );
};

const Console = connect(mapStateToProps)(ConsoleObj);

ConsoleObj.propTypes = {
    console: PropTypes.string,
    json: PropTypes.string
};

export default Console;
