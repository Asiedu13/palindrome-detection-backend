const router = require("express").Router();
const User = require("../models/user.model");
const assert = require("assert");
router.route("/").get((req, res) => {
  User.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(400).json(`Sorry and error occurred: ${err}`));
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

  newUser.validate().catch((error) => {
    assert.ok(error);
    assert.equal(error.errors["username"].message, "Oops!");
    assert.equal(
      error.errors["email"].message,
      "Email validation is incorrect"
    );
  });
  newUser.save().then(() => res.status(200).json("User added successfully"));
});
module.exports = router;
