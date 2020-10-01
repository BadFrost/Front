import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import App from "./App.js";
import history from "./history";

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>, 
    document.querySelector('#app')
);