const express = require("express");
const router = express.Router();
const topicModel = require("../models/topic.js");
const topics = [];

router.get("/topics", (req, res) => {
  topicModel.find(req.body, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("An error occurred while fetching topics.");
    } else {
      res.json(result);
    }
  });
});

module.exports = router;
