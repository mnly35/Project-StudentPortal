const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema({
  hdegree: {
    type: String,
    required: true,
  },
  Insname: {
    type: String,
    required: true,
  },
  Insaddress: {
    type: String,
    required: true,
  },
  addInfo: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Education", educationSchema);
