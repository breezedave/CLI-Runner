import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./Switch.scss";

const mapStateToProps = (state, ownProps) => {
    return {vals: ownProps};
};

const mapDispatchToProps = dispatch => {
    return {
        click: (el) => {
            let obj = el.target.className === "switchInner" ? el.target.parentElement : el.target;

            dispatch({
                type: "SetFilter",
                value: {
                    name: obj.getAttribute("name"),
                    val: obj.getAttribute("val")
                }
            });
        }
    };
};

const SwitchObj = ({
    vals, click
}) => (
    <div className="switch">
        <div
            className={"switchObj " + vals.val}
            name={vals.name}
            val={vals.val}
            onClick={click}
        >
            <div className="switchInner"></div>
        </div>
        <div className="switchTxt">{vals.txt}</div>
    </div>
);

const Switch = connect(mapStateToProps, mapDispatchToProps)(SwitchObj);

SwitchObj.propTypes = {
    vals: PropTypes.object,
    click: PropTypes.func
};

export default Switch;
