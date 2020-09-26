// import mongoose from "mongoose";
// import Login from "../models/login";
// import bcrypt from "bcryptjs";
const mongoose = require("mongoose");
const Login = require("../models/login");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const crypto = require("crypto");

function ForgetPassword(req, res) {
  if (req.body.email === "" || req.body.username === "") {
    res.status(400).send("email and Student ID are required");
  }
  console.error(req.body.email);
  const token = crypto.randomBytes(20).toString("hex");
  Login.findOneAndUpdate(
    {
      PARENTS_EMAIL: req.body.email,
      HTNO: req.body.username,
    },
    {
      RESET_TOKEN: token,
      RESET_EXPIRE: Date.now() + 3600000,
    },
    { upsert: false }
  ).then((user) => {
    if (user === null) {
      console.error("email not in database");
      res.status(403).send("email not in db");
    } else {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "mecparentsportal@gmail.com",
          pass: "parents1234",
        },
        tls: {
          rejectUnauthorized: false,
        },
      });

      const mailOptions = {
        from: "mecparentsportal@gmail.com",
        to: `${user.PARENTS_EMAIL}`,
        subject: "Link To Reset Password",
        text:
          "You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n" +
          "Please click on the following link, or paste this into your browser to complete the process within one hour of receiving it:\n\n" +
          `http://localhost:3000/reset/${token}\n\n` +
          "If you did not request this, please ignore this email and your password will remain unchanged.\n",
      };

      //console.log("sending mail");

      transporter.sendMail(mailOptions, (err, response) => {
        if (err) {
          console.error("there was an error: ", err);
        } else {
          //  console.log("here is the res: ", response);
          res.status(200).json("recovery email sent");
        }
      });
    }
  });
}
module.exports = {
  ForgetPassword: ForgetPassword,
};
