const mongoose = require("mongoose");
const security = require("../models/security");

function InOut(req, res) {
  security
    .find({ HTNO: req.decoded.username })
    .sort({ DATE: -1 })
    .then((sec) => {
      return res.status(200).json({
        success: true,
        message: `InOut List ${req.decoded.username}`,
        security: sec,
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
  InOut: InOut,
};
