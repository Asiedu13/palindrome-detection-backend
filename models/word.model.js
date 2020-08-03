const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let wordSchema = new Schema({
  user_id: { type: Object },
  text: { type: String, required: true, trim: true, lowercase: true },
});

const Word = mongoose.model("Word", wordSchema, "words");

module.exports = Word;
