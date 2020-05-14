import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import Jokes from "./components/Jokes";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <Route exact path="/" render={props => <Login {...props} />} />

      <Route exact path="/signup" render={props => <SignUp {...props} />} />
      <PrivateRoute path="/jokes">
        <Route path="/jokes" render={props => <Jokes {...props} />} />
      </PrivateRoute>
    </div>
  );
}

export default App;
