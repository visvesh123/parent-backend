const mongoose = require("mongoose");
const security = require("../../models/security");
const Login = require("../../models/login");

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
