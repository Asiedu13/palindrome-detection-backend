const router = require("express").Router();

const word = require("../models/word.model");

router.route("/").get((req, res) => {
  word
    .find()
    .then((data) => res.json(data))
    .catch((err) => res.status(400).json(err));
});

router.route("/add").post((req, res) => {
  const text = req.body.text;

  const newWord = new word({ text });

  newWord
    .save()
    .then(() => {
      res.status(200).json("Word added");
    })
    .catch((err) => {
      res.status(400).json("An error occurred " + err);
    });
});

module.exports = router;
