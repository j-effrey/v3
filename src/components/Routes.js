import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "../modules/About";
import App from "../App";
import Heady from '../components/Heady';
import history from './History';

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Heady} />
                    <Route path="/about" component={About} />
                </Switch>
            </Router>
        )
    }
}

export default Routes;