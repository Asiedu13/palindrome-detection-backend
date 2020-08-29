const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    default: "New User",
    required: true,
    trim: true,
  },
  password: { type: Schema.Types.Mixed, trim: true, required: true },
  words: { type: Array },
});
// userSchema.set("validateBeforeSave", false);

const User = mongoose.model("User", userSchema, "Users");
module.exports = User;
