import React, { Component } from "react";
import "./Register.css";
import axios from "axios";
export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      username: "",
      password: "",
      repassword: "",
      error: null,
    };
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onRegister = async (e) => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.password !== this.state.repassword) {
      this.setState({
        error: "Password does not match with Re-type Password!",
      });
      return;
    }
    try {
      const user = {
        username: this.state.username,
        password: this.state.password,
        repassword: this.state.repassword,
      };
      const body = JSON.stringify(user);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/user", body, config);
      console.log(res);
      this.setState({ error: "User saved successfully" });
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  };
  render() {
    return (
      <section>
        <div>
          <h1>
            STUDENT CONNECT
            <br /> REGISTER
          </h1>
          {this.state.error && <h4 className="error">{this.state.error}</h4>}
          <form onSubmit={this.onRegister}>
            <table className="table-reg">
              <tbody>
                <tr>
                  <td>First Name:</td>
                  <input
                    id="input-reg"
                    type="text"
                    name="fname"
                    value={this.state.fname}
                    onChange={this.onChange}
                    placeholder=" Enter Your First Name"
                    required
                  />
                </tr>
                <tr>
                  <td>Last Name:</td>
                  <input
                    id="input-reg"
                    type="text"
                    name="lname"
                    value={this.state.lname}
                    onChange={this.onChange}
                    placeholder=" Enter Your Last Name"
                    required
                  />
                </tr>
                <tr>
                  <td>User Name:</td>
                  <input
                    id="input-reg"
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChange}
                    placeholder=" Enter Your UserName"
                    required
                  />
                </tr>
                <tr>
                  <td>Password:</td>
                  <input
                    id="input-reg"
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    placeholder=" Enter Your Password"
                    required
                  />
                </tr>
                <tr>
                  <td>Re-type Password</td>
                  <input
                    id="input-reg"
                    type="password"
                    name="repassword"
                    value={this.state.repassword}
                    onChange={this.onChange}
                    placeholder=" Re-Enter Your Password"
                    required
                  />
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button className="registerBtn" type="submit">
                      Register
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </section>
    );
  }
}







