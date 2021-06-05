const mongoose = require("mongoose");
const Login = require("../models/login");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

function resetPassword(req, res) {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    const password = hash;
    //console.log(password);
    // console.log(req.params.token);
    Login.findOneAndUpdate(
      {
        RESET_TOKEN: req.params.token,
        RESET_EXPIRE: {
          $gt: Date.now(),
        },
      },
      { PASSWORD: password, RESET_TOKEN: null, RESET_EXPIRE: null },
      { upsert: false },
    ).then((user) => {
      // console.log(user);
      if (user == null) {
        console.error("password reset link is invalid or has expired");
        res.status(403).send("password reset link is invalid or has expired");
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
          subject: "Reset Success",
          text: "Password has been updated succesfully",
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

        res.status(200).send({
          student: user.HTNO,
          parent_email: user.PARENTS_EMAIL,
          message: "password reset succesfull",
        });
      }
    });
  });
}

module.exports = {
  resetPassword: resetPassword,
};
