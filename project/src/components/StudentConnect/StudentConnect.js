import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./StudentConnect.css";
export default class StudentConnect extends Component {
  render() {
    return (
      <section>
        <div className="logout">
          <NavLink to="/">LogOut</NavLink>
        </div>
        <div>
          <ul className="ul-student">
            <li>
              <NavLink to="/profile" data-toggle="tab">
                Profile
              </NavLink>
            </li>

            <li>
              <NavLink to="/education" data-toggle="tab">
                Education
              </NavLink>
            </li>
            <li>
              <NavLink to="/workexperience" data-toggle="tab">
                Work Experience
              </NavLink>
            </li>
            <li>
              <NavLink to="/community" data-toggle="tab">
                Community
              </NavLink>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}