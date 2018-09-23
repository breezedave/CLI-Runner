import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Main.scss";
import Console from "./Console/Console.jsx";
import Tab from "./Tab/Tab.jsx";

const mapStateToProps = (state) => {
    let systemSwitches = state.Content.Curr.SystemSwitches;
    let systemSwitch = state.Content.Curr.SystemSwitches.CurrSwitch;

    return {
        switches: systemSwitches.Switches,
        systemSwitch: systemSwitch,
        json: JSON.stringify(systemSwitches.Switches) //Needed as redux wasn't spotting change to Switches
    };
};

const MainObj = ({
    switches, title, systemSwitch
}) => {
    let switchesArr = [];

    for(let i in switches) {
        switchesArr.push({
            "name": i,
            "text": switches[i].text
        });
    }

    let divStyle = {width: (switchesArr.length * 100) + "px"}

    return (
        <div className="Main">
            <h1 className="MainTitle">{`Showing console for ${systemSwitch}`}</h1>
            <div className = "TabsHold">
                <div className = "Tabs" style={divStyle}>
                    {
                        switchesArr.map(_ =>
                            <Tab
                                key={_.name}
                                name={_.name}
                                txt={_.text}
                            />
                        )
                    }
                </div>
            </div>
            <Console/>
        </div>
    );
};

const Main = connect(mapStateToProps)(MainObj);

MainObj.propTypes = {
    switches: PropTypes.object,
    systemSwitch: PropTypes.string
};

export default Main;
