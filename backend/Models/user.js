const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    trim: true,
  },

  email: {
    type: String,
    required: [true, "username is required"],
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 6,
  },
});

module.exports = mongoose.model("User", userSchema);
