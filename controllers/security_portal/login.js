const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Users } = require("../../models/User");
const Token = require("../../middleware/token");

function seccreateUser(req, res) {
  bcrypt.hash(req.body.password, 15, (err, hash) => {
    const password = hash;
    //   const user = new User({
    //     _id: new mongoose.Types.ObjectId(),
    //     username: req.body.username,
    //     email: req.body.email,
    //     password,
    //   });
    // check that user submits the required value

    Users.findOneAndUpdate(
      { EID: req.body.username },
      { PASSWORD: password }
    ).then((user) => {
      res.json({
        msg: "updated",
      });
    });
  });
}

function secloginUser(req, res) {
  const { username, password } = req.body;
  Users.findOne({ EID: username })
    .then((existingUser) => {
      // console.log(existingUser);
      bcrypt.compare(password, existingUser.PASSWORD, (err, result) => {
        if (err) {
          return res.status(402).json({
            message: "Not authorized",
          });
        }
        if (result) {
          const token = Token(existingUser.id, existingUser.HTNO);
          return res.status(200).json({
            message: "User authorization successful",
            existingUser: {
              username: existingUser.EID,
              email: existingUser.EMAIL,
              _id: existingUser.id,
            },
            token,
          });
        }
        return res.status(401).json({
          message: "Invalid details",
        });
      });
    })
    .catch(() =>
      res.status(500).json({
        message: "Our server is in the locker room, please do try again.",
      })
    );
}

module.exports = {
  seccreateUser: seccreateUser,
  secloginUser: secloginUser,
};
