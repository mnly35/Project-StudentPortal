import React, { Component } from "react";
import Login from "../Login/Login";
export default class HomePage extends Component {
  render() {
    return (
      <React.StrictMode>
        <h1>STUDENT CONNECT</h1>
        <Login />
      </React.StrictMode>
    );
  }
}
