import React from "react";
import { connect } from "react-redux";
import "./Container.scss";
import SideBar from "./Sidebar/SideBar.jsx";
import Main from "./Main/Main.jsx";


const ContainerObj = (containerProps) => (
    <div className="Container SideBar_Open">
        <SideBar/>
        <Main/>
    </div>
);


const Container = connect(null)(ContainerObj);

export default Container;
