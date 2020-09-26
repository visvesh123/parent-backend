// import { Users } from "../models/User";
// import mongoose from "mongoose";
// import bcrypt from "bcryptjs";
// import AdminToken from "../middleware/Admintoken";

const { Users } = require("../models/User");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const AdminToken = require("../middleware/Admintoken");

function createAdminUser(req, res) {
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
      { EID: req.body.adminID },
      { PASSWORD: password }
    ).then((user) => {
      res.json({
        msg: "updated",
      });
    });
  });
}

function loginAdminUser(req, res) {
  const { adminID, password } = req.body;
  Users.findOne({ EID: adminID })
    .then((existingUser) => {
      // console.log(existingUser);
      bcrypt.compare(password, existingUser.PASSWORD, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: "Not authorized",
          });
        }
        if (result) {
          const token = AdminToken(existingUser.id, existingUser.EID);
          return res.status(200).json({
            message: "User authorization successful",
            existingUser: {
              username: existingUser.EID,
              name: existingUser.NAME,
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

async function seeAdminUser(req, res) {
  try {
    const user = await Login.find({ HTNO: req.decoded.username }).select(
      "-password"
    );
    if (!user) throw Error("User Does not exist");
    res.json(user);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
}
module.exports = {
  createAdminUser: createAdminUser,
  loginAdminUser: loginAdminUser,
  seeAdminUser: seeAdminUser,
};
