const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    default: "New User",
    required: true,
    trim: true,
    // unique: true,
    // validate: () => Promise.reject('Oops!'),
  },
  password: { type: String, trim: true },
  email: {
    type: String,
    required: true,
    validate: {
      validator: () => Promise.resolve(false),
      message: "Email validation is incorrect",
    },
    trim: true,
    lowercase: true,
  },
  words: { type: Array },
});
userSchema.set("validateBeforeSave", false);
const User = mongoose.model("User", userSchema, "Users");
module.exports = User;
