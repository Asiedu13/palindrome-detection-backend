const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: { type: Schema.Types.Mixed, trim: true, required: true },
  words: { type: Array },
});

const User = mongoose.model("User", userSchema, "users");
module.exports = User;
