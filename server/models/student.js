const mongoose = require("mongoose");

const student = mongoose.Schema({
  sno: {
    type: Number,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  repassword: {
    type: String,
    required: true,
  },

  dob: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Student", student);
