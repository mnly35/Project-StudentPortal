/* import React, { Component } from "react";
import axios from "axios";

export default class StudentProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      students: [],
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY4MTY3MDcxMCwiZXhwIjoxNjgyMDMwNzEwfQ.26PIVW7a_ygtMTm4yWgNehGQib7KfMMaDXRYZpkHAQE",
    };
  }

  componentDidMount() {
    this.getStudentsProfile();
    console.log("state-students");
    console.log(this.state.students);
  }

  getStudentsProfile = async () => {
    console.log("Get Student List Function is called...");
    try {
      const config = {
        headers: {
          Authorization: this.state.token,
        },
      };
      const res = await axios.get(
        "http://localhost:3000/student/profile",
        config
      );
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
    return (
      <StudentContext.Provider
        value={{
          students: this.state.students,
          getStudentsProfile: this.getStudentsProfile,
        }}
      >
        {this.props.children}
      </StudentContext.Provider>
    );
  }
}
 */
