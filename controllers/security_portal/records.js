const mongoose = require("mongoose");
const security = require("../../models/security");
const Login = require("../../models/login");
const { use } = require("../../routes/admin");
const moment = require("moment");
const allRecords = (req, res) => {
  //   console.log(req.body.username);
  security
    .find()
    .sort({ DATE: -1 })
    .then((user) => {
      return res.status(200).json({
        success: true,

        message: `All Records`,
        user: user,
        // HTNO: user.HTNO,
        // STUDENT_NAME: user.STUDENT_NAME,
        // BRANCH: user.BRANCH,
        // MOVING: user.MOVING,
        // REMARKS: user.REMARKS,
        // DATE: moment(user.DATE).format("MMMM Do YYYY, h:mm:ss a"),
        // BATCH: user.BATCH,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: err.message,
      });
    });
};

module.exports = allRecords;
