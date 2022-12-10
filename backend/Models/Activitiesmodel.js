const mongoose = require("mongoose");

const activitySchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true,
  },
  subnotes: {
    type: String,
  },
  deadline: {
    type: String,
  },
  location: {
    type: String,
  },
  dateCreated: {
    type: String,
  },
});

module.exports = mongoose.model("Activity", activitySchema);
