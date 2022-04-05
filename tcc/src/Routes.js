import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import Login from "./Components/Login";

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;