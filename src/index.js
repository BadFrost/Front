import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { SnackbarProvider } from 'notistack';
import App from "./App.js";
import history from "./history";

ReactDOM.render(
    <Router history={history}>
        <SnackbarProvider 
            maxSnack={6}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
            }}
        >
            <App />
        </SnackbarProvider>
    </Router>, 
    document.querySelector('#app')
);