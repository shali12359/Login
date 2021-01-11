import React, {Component}from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signin from './Signin';
import Signup from './Signup';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
            <Switch>
              <Route exact path="/" exact component={ Signin } />
              <Route path="/Signup" exact component={ Signup } />
              <Route path="/Signin" exact component={ Signin } />
              <Route path="/Home" exact component={ Home } />
            </Switch>
        </Router>
    </div>
    );
  }
}
