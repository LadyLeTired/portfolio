import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, AboutMe, Portfolio } from "./index.js";

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about-me" component={AboutMe} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    );
  }
}

export default Routes;
