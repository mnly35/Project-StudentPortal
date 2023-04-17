/* import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Profile.css";
import axios from "axios";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      username: "",
      password: "",
      repassword: "",
      error: "",
      editing: false,
    };
  }

  onLogOut = (e) => {
    console.log(this.state);
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onEdit = () => {
    const { fname, lname, username, password, repassword } = this.state;
    const userData = {
      fname,
      lname,
      username,
      password,
      repassword,
    };
    console.log(userData);
    this.setState({ editing: true });
  };

  onSave = async () => {
    this.setState({ editing: false });
    const { fname, lname, username, password, repassword } = this.state;
    const userData = {
      fname,
      lname,
      username,
      password,
      repassword,
    };
    try {
      const body = JSON.stringify(userData);
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        "http://localhost:3000/user/update-profile",
        body,
        config
      );
      console.log(res);
      if (res.status === 200) {
        console.log("Profile updated successfully!");
      } else {
        console.log("Failed to update profile!");
      }
    } catch (error) {
      console.log(error);

      console.error(error);
    }
  };

  render() {
    const { fname, lname, username, password, repassword } = this.state;
    return (
      <section>
        <div className="logout">
          <NavLink to="/">LogOut</NavLink>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/studentconnect/profile" data-toggle="tab">
                Profile
              </NavLink>
            </li>

            <li>
              <NavLink to="/studentconnect/education" data-toggle="tab">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/studentconnect/workexperience" data-toggle="tab">
                Work Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/studentconnect/community" data-toggle="tab">
                Community
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4>{this.state.error}</h4>
          <table className="profile">
            <tbody>
              <tr>
                <th className="headerpro">
                  <h3>Profile</h3>
                </th>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <input
                    className="editbttn"
                    type="button"
                    name="btnSubmit"
                    value="Edit"
                    onClick={this.onEdit}
                  />
                </td>
              </tr>
              <tr>
                <td>First Name:</td>
                <td>
                  <input
                    id="input-pro"
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={(e) => this.onChange(e)}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <input
                  id="input-pro"
                  type="text"
                  name="lname"
                  value={lname}
                  onChange={(e) => this.onChange(e)}
                  disabled={!this.state.editing}
                />
              </tr>
              <tr>
                <td>User Name:</td>
                <input
                  id="input-pro"
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => this.onChange(e)}
                  disabled={!this.state.editing}
                />
              </tr>
              <tr>
                <td>Password:</td>
                <input
                  id="input-pro"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => this.onChange(e)}
                  disabled={!this.state.editing}
                />
              </tr>
              <tr>
                <td>Re-type Password</td>
                <input
                  id="input-pro"
                  type="password"
                  name="repassword"
                  value={repassword}
                  onChange={(e) => this.onChange(e)}
                  disabled={!this.state.editing}
                />
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    className="savebttn"
                    type="button"
                    name="btnSave"
                    value="Save"
                    onClick={this.onSave}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}
 */

import React, { Component } from "react";
import "./Profile.css";
import { NavLink } from "react-router-dom";
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      username: "",
      password: "",
      repassword: "",
      editing: false,
    };
  }

  onEdit = () => {
    this.setState({ editing: true });
  };

  onSave = () => {
    this.setState({ editing: false });
  };

  onChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { fname, lname, username, password, repassword } = this.state;

    return (
      <section>
        <div className="logout">
          <NavLink to="/">LogOut</NavLink>
        </div>
        <div>
          <ul>
            <li>
              <NavLink to="/studentconnect/profile" data-toggle="tab">
                Profile
              </NavLink>
            </li>

            <li>
              <NavLink to="/studentconnect/education" data-toggle="tab">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/studentconnect/workexperience" data-toggle="tab">
                Work Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/studentconnect/community" data-toggle="tab">
                Community
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4>{this.state.error}</h4>
          <table className="profile">
            <tbody>
              <tr>
                <th className="headerpro">
                  <h3>Profile</h3>
                </th>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <input
                    className="editbttn"
                    type="button"
                    name="btnSubmit"
                    value="Edit"
                    onClick={this.onEdit}
                  />
                </td>
              </tr>
              <tr>
                <td>First Name:</td>
                <td>
                  <input
                    id="input-pro"
                    type="text"
                    name="fname"
                    value={fname}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td>Last Name:</td>
                <td>
                  <input
                    id="input-pro"
                    type="text"
                    name="lname"
                    value={lname}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td>User Name:</td>
                <td>
                  <input
                    id="input-pro"
                    type="text"
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td>Password:</td>
                <td>
                  <input
                    id="input-pro"
                    type="password"
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td>Re-type Password</td>
                <td>
                  <input
                    id="input-pro"
                    type="password"
                    name="repassword"
                    value={repassword}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    className="savebttn"
                    type="button"
                    name="btnSave"
                    value="Save"
                    onClick={this.onSave}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    );
  }
}

export default Profile;
