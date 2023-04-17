/* import React, { Component } from "react";
import StudentProvider from "./StudentProvider";

export default class StudentProfile extends Component {
  static contextType = StudentProvider;

  componentDidMount() {
    this.context.getStudentsList();
    console.log("state-students");
    console.log(this.context.students);
  }

  render() {
    return (
      <div>
        <h1>Student Profile</h1>
        <table>
          <thead>
            <tr>
              <td>SNo</td>
              <td>FirstName</td>
              <td>LastName</td>
              <td>Username</td>
            </tr>
          </thead>
          <tbody>
            {this.context.students.map((student, index) => {
              return (
                <tr key={index}>
                  <td>{student.sno}</td>
                  <td>{student.fname}</td>
                  <td>{student.lname}</td>
                  <td>{student.username}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
 */
