import React, { Component } from "react";
import "./components/home.css";
import Home from "./components/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route>
              <Home path="" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
