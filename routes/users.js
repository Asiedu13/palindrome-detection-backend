const router = require("express").Router();
const User = require("../models/user.model");
const assert = require("assert");

router.route("/").get((req, res) => {
  User.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(`Sorry an error occurred: ${err}`));
});

router.route("/include").post((req, res) => {
  const username = req.body.username.toLowerCase();
  const email = req.body.email.toLowerCase();
  const password = String(req.body.password);
  const words = req.body.words;

  let newUser = new User({
    username,
    email,
    password,
    words,
  });

  newUser
    .save()
    .then((nUser) =>
      res.status(201).json({ message: "User added successfully", nUser })
    )
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});
module.exports = router;
