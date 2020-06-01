import React from "react";
import { Router, Route, Switch, Redirect, withRouter } from "react-router-dom";
import HomeScreen from "./components/HomeScreen"
import SignUpScreen from "./components/SignUp"
import LoginScreen from "./components/LoginScreen"

import './App.css';
import SignUp from "./components/SignUp";
import GuestBook from "./components/GuestBook";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/"  component={HomeScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/signup" component={SignUpScreen} />
          <Route path="/guestbook" component={GuestBook} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
