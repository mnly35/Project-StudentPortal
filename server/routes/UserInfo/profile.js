const express = require("express");
const router = express.Router();
const Student = require("../models/student");
const { check, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const auth = require("./middleware/auth");

router.get("/student/:id", auth, async (req, res) => {
  try {
    const student = await studentModel.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(student);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});
// Route to update user profile
router.post(
  "/update-profile",
  [
    check("fname", "First name is required").not().isEmpty(),
    check("lname", "Last name is required").not().isEmpty(),
    check("username", "Username is required").not().isEmpty(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 }),
    check("repassword").custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Passwords do not match");
      }
      return true;
    }),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fname, lname, username, password } = req.body;

    try {
      // Check if the user already exists
      let student = await Student.findOne({ username });

      if (!student) {
        return res.status(400).json({ msg: "User not found" });
      }

      // Hash the password and update the user profile
      const salt = await bcrypt.genSalt(10);
      student.password = await bcrypt.hash(password, salt);
      student.fname = fname;
      student.lname = lname;

      await student.save();

      res.status(200).json({ msg: "Profile updated successfully!" });
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
