import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./Tab.scss";

const mapStateToProps = (state, ownProps) => {
    return {
        ownProps: ownProps
    };
};

const mapDispatchToProps = dispatch => {
    return {
        click: (el) => {
            dispatch({
                type: "SetConsole",
                value: el.target.value
            });
        }
    };
};

const TabObj = ({
    ownProps, click
}) => {
    return (
        <div className="Tab">
            <input type="button" value={ownProps.txt} onClick={click}/>
        </div>
    );
};

const Tab = connect(mapStateToProps, mapDispatchToProps)(TabObj);

TabObj.propTypes = {
    switches: PropTypes.object
};

export default Tab;
