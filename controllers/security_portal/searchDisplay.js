const mongoose = require("mongoose");
const security = require("../../models/security");
const Login = require("../../models/login");
const moment = require("moment");

const searchDisplay = (req, res) => {
  //   console.log(req.body.username);
  Login.find({ HTNO: req.body.username })
    .then((user) => {
      if (user.length == 0) {
        return res.json({
          msg: "Not found",
        });
      } else {
        return res.status(200).json({
          success: true,

          message: `Details of  ${req.body.username}`,
          id: user[0].HTNO,
          s_name: user[0].STUDENT_NAME,
          s_mobile: user[0].STUDENT_MOBILE,
          batch: user[0].BATCH,
          f_name: user[0].FATHER_NAME,
          par_mobile: user[0].PARENTS_MOBILE,
          par_email : user[0].PARENTS_EMAIL
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: err.message,
      });
    });
};

module.exports = searchDisplay;
