import React from "react";
import { hot } from "react-hot-loader";
import { Switch, Route } from "react-router-dom";
import { Main } from '../components/Main';
import { AddUser } from '../components/AddUser';
import { UpdateUser } from '../components/UpdateUser';
import { DeleteUser } from '../components/DeleteUser';
import "./App.css";

let App = () => {
    return (
        <Switch>
            <Route exact path="/" render={() => (
                <Main />
            )} />
            <Route path="/addUser" render={() => (
                <AddUser />
            )} />
            <Route path="/updateUser" render={() => (
                <UpdateUser />
            )} />
            <Route path="/deleteUser" render={() => (
                <DeleteUser />
            )} />
        </Switch>
    )
};

export default hot(module)(App);