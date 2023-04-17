import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./WorkExperience.css";

export default class WorkExperience extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Jobtitle: "",
      Companyname: "",
      Companyaddress: "",
      Jobprofile: "",
      Skills: "",
      error: "",
      editing: false, // editing değişkeni
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
    const { Jobtitle, Companyname, Companyaddress, Jobprofile, Skills } =
      this.state;
    const userData = {
      Jobtitle,
      Companyname,
      Companyaddress,
      Jobprofile,
      Skills,
    };
    console.log(userData);

    // editing değişkenini true olarak ayarla
    this.setState({ editing: true });
  };
  onSave = () => {
    // "Save" butonuna tıklandığında "editing" anahtar kelimesini "true" olarak ayarla
    this.setState({ editing: false });
    const { Jobtitle, Companyname, Companyaddress, Jobprofile, Skills } =
      this.state;
    const userData = {
      Jobtitle,
      Companyname,
      Companyaddress,
      Jobprofile,
      Skills,
    };
    console.log(userData);
  };
  render() {
    const { Jobtitle, Companyname, Companyaddress, Jobprofile, Skills } =
      this.state;

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
          <table className="workexp">
            <tbody>
              <tr>
                <th className="header-work">Work Experience</th>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    className="edit-work"
                    type="button"
                    name="btnSubmit"
                    value="Edit"
                    onClick={this.onEdit}
                  />
                </td>
              </tr>
              <tr>
                <td>Experience Level:</td>
                <td>
                  <input
                    type="radio"
                    name="radiobutton"
                    disabled={!this.state.editing}
                  />
                  <label for="beginner">Beginner</label>
                  <input type="radio" name="radiobutton" />
                  <label for="experienced">Experienced</label>
                </td>
              </tr>

              <tr>
                <td>Job Title:</td>
                <td>
                  <input
                    className="input-work"
                    type="text"
                    name="Jobtitle"
                    value={Jobtitle}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td>Company Name:</td>
                <td>
                  <input
                    className="input-work"
                    type="text"
                    name="Companyname"
                    value={Companyname}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td>Company Address:</td>
                <td>
                  <input
                    className="input-work"
                    type="text"
                    name="Companyaddress"
                    value={Companyaddress}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td>Job Profile:</td>
                <td>
                  <textarea
                    className="input-work"
                    type="text"
                    name="Jobprofile"
                    value={Jobprofile}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td>Skills:</td>
                <td>
                  <textarea
                    className="input-work"
                    type="text"
                    name="Skills"
                    value={Skills}
                    onChange={this.onChange}
                    disabled={!this.state.editing}
                  />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <input
                    className="save-work"
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
