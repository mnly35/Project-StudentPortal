import React, { Component } from "react";
import Navigation from "./Navigation";
import Register from "./Register/Register";
import HomePage from "./HomePage/HomePage";
import StudentConnect from "./StudentConnect/StudentConnect";
import Profile from "./Profile/Profile";
import Education from "./Education/Education";
import WorkExperience from "./WorkExperience/WorkExperience";
//import StudentContext from "./StudentContext";
//import StudentList from "./StudentList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Community from "./Community/Community";

export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };
  }
  render() {
    return (
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/studentconnect" element={<StudentConnect />}></Route>

          <Route path="/studentconnect/profile" element={<Profile />} />
          <Route path="/studentconnect/education" element={<Education />} />
          <Route
            path="/studentconnect/workexperience"
            element={<WorkExperience />}
          />
          <Route path="/studentconnect/community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
