import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Education.css";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hdegree: "",
      Insname: "",
      Insaddress: "",
      addInfo: "",
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

  onEdit = (e) => {
    const { hdegree, Insname, Insaddress, addInfo } = this.state;
    const userData = {
      hdegree,
      Insname,
      Insaddress,
      addInfo,
    };
    console.log(userData);
    this.setState({ editing: true });
  };

  onSave = () => {
    this.setState({ editing: false });
    const { hdegree, Insname, Insaddress, addInfo } = this.state;
    const userData = {
      hdegree,
      Insname,
      Insaddress,
      addInfo,
    };
    console.log(userData);
  };

  render() {
    const { hdegree, Insname, addInfo, Insaddress } = this.state;
    return (
      <section>
        <div className="logout">
          <NavLink to="/">LogOut</NavLink>
        </div>

        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/studentconnect/profile" activeClassName="active">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/studentconnect/education"
                  activeClassName="active"
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/studentconnect/workexperience"
                  activeClassName="active"
                >
                  Work Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/studentconnect/community"
                  activeClassName="active"
                >
                  Community
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <h4>{this.state.error}</h4>
          <table className="education">
            <tbody>
              <tr>
                <th className="header-edu">Education</th>
              </tr>
              <tr>
                <td> </td>
                <td>
                  <button
                    className="editbtn1"
                    type="button"
                    name="btnSubmit"
                    onClick={this.onEdit}
                    disabled={this.state.editing}
                  >
                    Edit
                  </button>
                </td>
              </tr>
              <tr>
                <td>Highest Degree:</td>
                <td>
                  <input
                    className="input-edu"
                    type="text"
                    name="hdegree"
                    value={hdegree}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td>Institute Name:</td>
                <td>
                  <input
                    className="input-edu"
                    type="text"
                    name="Insname"
                    value={Insname}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td>Institute Address:</td>
                <td>
                  <input
                    className="input-edu"
                    type="text"
                    name="Insaddress"
                    value={Insaddress}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td>Additional Information :</td>
                <td>
                  <textarea
                    className="txtarea"
                    type="text"
                    name="addInfo"
                    value={addInfo}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    className="savebtn1"
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
