// import mongoose from "mongoose";
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Login = require("../models/login");
const Token = require("../middleware/token");

function createUser(req, res) {
  bcrypt.hash(req.body.password, 15, (err, hash) => {
    const password = hash;
    //   const user = new User({
    //     _id: new mongoose.Types.ObjectId(),
    //     username: req.body.username,
    //     email: req.body.email,
    //     password,
    //   });
    // check that user submits the required value

    Login.findOneAndUpdate(
      { HTNO: req.body.username },
      { PASSWORD: password }
    ).then((user) => {
      res.json({  
        msg: "updated",
      });
    });
  });
}

function loginUser(req, res) {
  const { username, password } = req.body;
  Login.findOne({ HTNO: username })
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
              username: existingUser.HTNO,
              email: existingUser.STUDENT_EMAIL,
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

async function seeUser(req, res) {
  try {
    const user = await Login.find({ HTNO: req.decoded.username });

    if (!user) throw Error("User Does not exist");
    res.json({ user: user });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}

module.exports = {
  createUser: createUser,
  loginUser: loginUser,
  seeUser: seeUser,
};
