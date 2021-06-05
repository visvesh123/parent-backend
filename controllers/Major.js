const mongoose = require("mongoose");
const majorMarks = require("../models/major");

function Major(req, res) {
  majorMarks
    .find({
      $and: [{ HTNO: req.decoded.username }, { SEM: req.params.semester }],
    })
    .sort({ SUB_CODE: 1 })
    .then((marks) => {
      return res.status(200).json({
        success: true,
        message: `List of major marks of ${req.decoded.username}`,
        marks: marks,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: err.message,
      });
    });
}
module.exports = {
  Major: Major,
};
