import React from "react";
import { connect } from "react-redux";
import "./SideBar.scss";

import SBSwitchContainer from "./SBSwitchContainer/SBSwitchContainer.jsx";

const SideBarObj = () => (
    <div className="SideBar">
        <SBSwitchContainer/>
    </div>
);

const SideBar = connect(null)(SideBarObj);

export default SideBar;
