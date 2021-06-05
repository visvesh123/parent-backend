const mongoose = require("mongoose");
const Internal_Lab = require("../models/Internal_Lab");

function internal(req, res) {
  Internal_Lab.find({
    $and: [{ HTNO: req.decoded.username }, { SEM: req.params.semester }],
  })
    .sort({ SUB_CODE: 1 })
    .then((marks) => {
      return res.status(200).json({
        success: true,
        message: `List of internal  marks of ${req.decoded.username}`,
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
  internal: internal,
};
