const express = require("express");
const router = express.Router();
const education = require("../models/education");

// Get all education
router.get("/", async (req, res) => {
  try {
    const educations = await education.find(req.body);
    res.json(educations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create one education
router.post("/", async (req, res) => {
  const education = new education({
    hdegree: req.body.hdegree,
    Insname: req.body.Insname,
    Insaddress: req.body.Insaddress,
    addInfo: req.body.addInfo,
  });

  try {
    const newEducation = await education.save();
    res.status(201).json(newEducation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update one education
router.put("/", async (req, res) => {
  if (req.body.hdegree != null) {
    res.education.hdegree = req.body.hdegree;
  }
  if (req.body.Insname != null) {
    res.education.Insname = req.body.Insname;
  }
  if (req.body.Insaddress != null) {
    res.education.Insaddress = req.body.Insaddress;
  }
  if (req.body.addInfo != null) {
    res.education.addInfo = req.body.addInfo;
  }

  try {
    const updatedEducation = await res.education.save();
    res.json(updatedEducation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
