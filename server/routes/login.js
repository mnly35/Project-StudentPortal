const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Register a new user
router.post("/", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    const user = userModel({
      username: req.body.username,
      password: hashPassword,
    });
    const savedUser = await user.save(req.body);
    res.send(savedUser);
  } catch (error) {
    res.send(error);
  }
});

// Login an existing user
router.post("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json({ error: "Invalid User " });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid Password" });
    }
    const payload = {
      username: user.username,
    };
    jwt.sign(
      payload,
      process.env.SECRETKEY,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) {
          return res.status(500).json({
            error: "Error while login, please try later",
          });
        }
        res.json({ token });
      }
    );
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
