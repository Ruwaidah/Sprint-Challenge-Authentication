const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("./auth-model");
const secrets = require("../config/secrets");

router.post("/register", (req, res) => {
  // implement registration
  if (req.body.username && req.body.password) {
    Users.findUser(req.body.username).then(user => {
      if (!user) {
        Users.addUser(req.body)
          .then(ids => {
            res.status(200).json({ id: ids[0], message: "register completed" });
          })
          .catch(error => {
            res.status(500).json({
              message: "error register"
            });
          });
      } else {
        res.status(404).json({
          message: "username is taken"
        });
      }
    });
  } else {
    res.status(404).json({
      message: "please provise username and password !"
    });
  }
});

router.post("/login", (req, res) => {
  // implement login
  Users.findUser(req.body.username).then(user => {
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({
          message: "welcome",
          token,
          user
        });
      } else {
        res.status(400).json({
          message: "username or password incorrect! "
        });
      }
    } else {
      res.status(404).json({
        message: "username or password is incorrect! "
      });
    }
  });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, secrets.JwtSecret, options);
}
module.exports = router;
