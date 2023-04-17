import axios from "axios";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Login.css";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: "",
      isLoggedIn: false,
      students: [],
      token: "",
    };
  }

  onChange = (e) => {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  };

  onLogin = async (e) => {
    e.preventDefault();
    console.log(this.state);
    try {
      const user = {
        username: this.state.username,
        password: this.state.password,
      };
      const body = JSON.stringify(user);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "http://localhost:3000/user/login",
        body,
        config
      );
      console.log(res);
      if (res.status === 200) {
        this.setState({
          ...this.state,
          error: this.state.username + " user is logged in successfully!",
          isLoggedIn: true,
          token: res.data.token, // store token to state
        });
        console.log(this.state);
        await this.getStudentsProfile(); // call getStudentsList function
        console.log("state-students");
        console.log(this.state.students);
        window.location.replace("/studentconnect/profile");
      } else {
        this.setState({ ...this.state, error: res.statusText });
        console.log(this.state);
      }
    } catch (error) {
      console.log(error);
      alert("Verify Username and password...");
      this.setState({
        ...this.state,
        error: "",
      });
      console.log(this.state);
    }
  };

  onRegister = (e) => {
    console.log(this.state);
  };

  getStudentsProfile = async () => {
    console.log("Get Student List Function is called...");
    try {
      const config = {
        headers: {
          Authorization: this.state.token,
        },
      };
      const res = await axios.get("http://localhost:3000/user/login", config);
      console.log(res);
      if (res.status === 200) {
        this.setState({ ...this.state, students: res.data });
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <div>
        <h2 className="head-login">Login</h2>
        {this.state.error && <h4 className="error">{this.state.error}</h4>}
        <form onSubmit={this.onLogin}>
          <table className="table-log">
            <tbody>
              <tr>
                <td className="td-log">User Name:</td>
                <td>
                  <input
                    className="input-log"
                    type="text"
                    name="username"
                    value={username}
                    onChange={(e) => this.onChange(e)}
                    placeholder="Enter Your UserName"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td className="td-log">Password:</td>
                <td>
                  <input
                    className="input-log"
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => this.onChange(e)}
                    placeholder="Enter Your Password"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    className="signInbtn"
                    type="button"
                    name="btnSubmit"
                    value="Sign In"
                    onClick={(e) => this.onLogin(e)}
                  />
                </td>
                <td>
                  <NavLink to="/register">
                    <input
                      className="signUpbtn"
                      type="button"
                      name="btnSubmit"
                      value="Sign Up"
                      onClick={(e) => this.onRegister(e)}
                    />
                  </NavLink>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }
}
