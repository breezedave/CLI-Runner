import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./SBSwitchContainer.scss";
import Switch from "./Switch/Switch.jsx";

const mapStateToProps = (state) => {
    let systemSwitches = state.Content.Curr.SystemSwitches;

    return {
        switches: systemSwitches.Switches,
        json: JSON.stringify(systemSwitches.Switches) //Needed as redux wasn't spotting change to Switches
    };
};

const SBSwitchContainerObj = ({
    switches, title
}) => {
    let switchesArr = [];

    for(let i in switches) {
        switchesArr.push({
            "name": i,
            "text": switches[i].text,
            "value": switches[i].value
        });
    }

    return (
        <div className="SBSwitchContainer">
            <div className="SBSwitchTitle">{title}</div>
            {
                switchesArr.map(_ =>
                    <Switch
                        key={_.name}
                        name={_.name}
                        val={_.value}
                        txt={_.text}
                    />
                )
            }
        </div>
    );
};

const SBSwitchContainer = connect(mapStateToProps)(SBSwitchContainerObj);

SBSwitchContainerObj.propTypes = {
    switches: PropTypes.object,
    title: PropTypes.string
};

export default SBSwitchContainer;
