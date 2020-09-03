const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let wordSchema = new Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    // unique: true,
  },
});

const Word = mongoose.model("Word", wordSchema, "words");

module.exports = Word;
