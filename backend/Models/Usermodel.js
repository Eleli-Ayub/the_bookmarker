const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  imageUrl: {
    type: String,
  },
  firstname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  lastname: {
    type: String,
    required: true,
    min: 3,
    max: 20,
  },
  phoneNumber: {
    type: String,
    required: true,
    min: 3,
    max: 20,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    min: 5,
    max: 20,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("User", userSchema);
