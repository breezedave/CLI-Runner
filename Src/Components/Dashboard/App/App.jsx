import React from "react";
import { connect } from "react-redux";
import Container from "./Container/Container.jsx";
import "./app.scss";

const AppObj = () => (
    <div className="App">
        <Container/>
    </div>
);

const App = connect(null)(AppObj);

export default App;
