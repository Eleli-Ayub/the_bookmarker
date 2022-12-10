const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
  },
  dateCreated: {
    type: String,
  },
  isDone: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
