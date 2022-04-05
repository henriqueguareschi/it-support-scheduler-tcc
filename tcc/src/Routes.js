import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Pages/Home";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;