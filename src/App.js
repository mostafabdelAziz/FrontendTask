import React from "react";
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import HomeScreen from "./components/HomeScreen"
import SignUpScreen from "./components/SignUp"
import LoginScreen from "./components/LoginScreen"

import './App.css';
import SignUp from "./components/SignUp";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/"  component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/signup" component={SignUpScreen} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
