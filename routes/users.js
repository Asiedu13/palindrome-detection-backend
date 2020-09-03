const router = require("express").Router();
const User = require("../models/user.model");

router.route("/").get((req, res) => {
  User.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(`Sorry an error occurred: ${err}`));
});

router.route("/include").post((req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  const email = req.body.email;
  const password = req.body.password;
  const words = [req.body.words];

  let newUser = new User({
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
        error: `${err} error`,
      });
    });
  // console.log(newUser);
});

// Authenticate user
router.route("/login").post((req, res) => {
  User.findOne({ email: req.body.email, password: req.body.password })
    .then((user) => {
      if (user) {
        res.status(200).json({
          message: `User exists`,
          user,
        });
      } else {
        res.status(404).json({
          message: `User does not exist`,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        err: `/login failure: ${err}`,
      });
    });
});

// get individual user
router.route("/:id").get((req, res) => {
  User.findById(req.params.id).then((data) => {
    if (req.params.id) {
    }
  });
});

function resolution(user, stat, msg, errStat, errVal, res) {
 
}

module.exports = router;
