const mongoose = require("mongoose");
const security = require("../../models/security");
const Login = require("../../models/login");
const moment = require("moment");

const searchStudent = (req, res, next) => {
  Login.find({ HTNO: req.body.username })
    .then((user) => {
      req.data = user;
      // console.log(req.body.username);
      //   console.log(req.data);
      //   if (user.length == 0) {
      //     return res.json({
      //       msg: "Not found",
      //     });
      //   } else {
      //     return res.status(200).json({
      //       success: true,

      //       message: `Details of  ${req.body.username}`,
      //       s_name: user[0].STUDENT_NAME,
      //       batch: user[0].BATCH,
      //       par_mobile: user[0].PARENTS_MOBILE,
      //     });
      //   }
      next();
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: err.message,
      });
    });
};

const addChecking = (req, res) => {
  const test = moment(Date.now()).format("MMMM Do YYYY, h:mm:ss a");
  //   if (req.data.length == 0) {
  //     return res.json({
  //       msg: "Not found",
  //     });

  var branch;
  //   console.log(req.data);
  if (req.data.length == 0) {
    return res.json({
      msg: "Couldn't find",
    });
  }
  //   console.log(id[7]);
  const digit = req.body.username[7];
  if (digit == "1") {
    branch = "CIVIL";
  } else if (digit == "2") {
    branch = "EEE";
  } else if (digit == "3") {
    branch = "MECH";
  } else {
    branch = "CSE";
  }

  // console.log(typeof test);
  security.create(
    {
      HTNO: req.body.username,
      STUDENT_NAME: req.data[0].STUDENT_NAME,
      BRANCH: branch,
      MOVING: req.body.MOVING,
      REMARKS: req.body.REMARKS,
      DATE: test,
      BATCH: req.data[0].BATCH,
    },
    (err, done) => {
      if (err) {
        res.json({
          msg: err.message,
        });
      } else {
        res.json({
          msg: "Added Succesfully",
        });
      }
    }
  );
};

module.exports = {
  searchStudent: searchStudent,
  addChecking: addChecking,
};
