var express = require("express");
var User = require("../models/auth");
var router = express.Router();


//user login
router.post("/login", function (req, res) {
  User.find({ email: req.body.email, password: req.body.password }).exec(
    function (err, user) {
      if (err) {
        res.status(500).json({ message: "error while Login", success: false });
      } else {
        if (user.length && user[0].email) {
          
          res.json({
            success: true,
            data:user[0]
          });
        } else {
          res
            .status(200)
            .json({ message: "user does not exists", success: false });
        }
      }
    }
  );
});

//User registration

router.post("/register", function (req, res) {
  User.find({ email: req.body.email }).exec(function (err, user) {
    if (err) {
      res.status(500).json({ message: "error has occured", success: false });
    } else {
      if (user.length && user[0].email) {
        res.status(200).json({ message: "user already exists", success: false });
      } else {
        var newUser = new User();
        newUser.name = req.body.name;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.dob = req.body.dob;
        newUser.gender = req.body.gender;
        newUser.save(function (err, user) {
              if (err) {
                res.status(500).send("error while registering user");
              } 
                res
                  .status(200)
                  .json({ message: "successfully registered", success: true });
              
            });
          }
    }
  });
});

module.exports = router ;