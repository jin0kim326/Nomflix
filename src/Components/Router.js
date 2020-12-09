import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Home from "./Home";
import TV from "../Routes/TV";
import Search from "../Routes/Search";

export default () => (
    <Router>
        <Switch>
        <Route path = "/" exact componet={Home} />
        <Route path = "/tv" exact componet={TV} />
        <Route path= "/tv/popular" render={() => <h1>popular</h1>} />
        <Route path = "/search" componet={Search} />
        <Redirect from="*" to="/" />
        </Switch>
    </Router>
);