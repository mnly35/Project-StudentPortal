const express = require("express");
const router = express.Router();
const studentModel = require("../models/student");
const bcrypt = require("bcrypt");
const { check, validationResult } = require("express-validator/check");
const auth = require("../middleware/auth");

//Get student Profile
router.get("/profile", async (req, res) => {
  console.log("Get Student API is called...");

  try {
    const student = await studentModel.find();
    res.send(student);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//Path Parameter
router.get("/:sno", auth, async (req, res) => {
  console.log("Get Student By ID API is called...");

  try {
    const student = await studentModel.findOne({ sno: req.params.sno });
    res.send(student);
  } catch (error) {
    res.send(error);
  }
});
router.post("/register", async (req, res) => {
  req.session.studentId = req.body.id;
  res.send("Register is successed");

  try {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const student = studentModel({
      sno: req.body.sno,
      fname: req.body.fname,
      lname: req.body.lname,
      username: req.body.username,
      password: hashPassword,
      repassword: req.body.repassword,
      dob: req.body.dob,
    });

    const savedStudent = await student.save();
    res.send(savedStudent);
  } catch (error) {
    res.send(error);
  }
});

router.post(
  "/",

  [
    check("dob", "Must be at least 18 years old").custom((value, { req }) => {
      const dob = new Date(value);
      const ageInMilliseconds = Date.now() - dob.getTime();
      const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365);
      if (ageInYears < 18) {
        throw new Error("Must be at least 18 years old");
      }
      return true;
    }),
    check("sno", "Roll number is required")
      .isNumeric()
      .custom((value) => {
        return value > 0;
      }),
    check(
      "fname",
      "Student name must have min 5 and max 120 characters."
    ).isLength({
      min: 5,
      max: 120,
    }),
  ],
  async (req, res) => {
    console.log("Post Student API is called...");
    //Validate your request.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { sno, fname, lname, username, dob } = req.body;

      const existingStudent = await studentModel.findOne({ sno: req.body.sno });

      if (existingStudent) {
        return res.status(400).json({ msg: "Student already exists" });
      }

      const student = new studentModel({
        sno: req.body.sno,
        fname: req.body.fname,
        lname: req.body.lname,
        username: req.body.username,
        dob: req.body.dob,
      });
      try {
        const save = await student.save();
        res.send(save);
      } catch (error) {
        res.send(error);
      }

      res.send(student);
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);
router.put("/:sno", async (req, res) => {
  console.log("Update Student API is called...");

  try {
    const student = await studentModel.updateOne(
      { sno: req.params.sno },
      {
        $set: req.body,
      }
    );
    res.send(student);
  } catch (error) {
    res.send(error);
  }
});

router.delete("/:sno", async (req, res) => {
  console.log("Delete Student API is called...");

  try {
    const save = await studentModel.remove({ sno: req.params.sno });
    res.send(save);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
