const mongoose = require("mongoose");

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  created_by: {
    type: String,
    reqired: true,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

const Topic = mongoose.model("Topic", topicSchema);

module.exports = Topic;
