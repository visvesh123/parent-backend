// import mongoose from "mongoose";
const mongoose = require("mongoose");
const { Minor1, Minor2 } = require("../models/minor");

function M1(req, res) {
  Minor1.find({
    $and: [{ HTNO: req.decoded.username }, { SEM: req.params.semester }],
  })
    .sort({ SUB_CODE: 1 })
    .then((marks) => {
      return res.status(200).json({
        success: true,
        message: `List of minor 1 marks of ${req.decoded.username}`,
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

function M2(req, res) {
  Minor2.find({
    $and: [{ HTNO: req.decoded.username }, { SEM: req.params.semester }],
  })
    .sort({ SUB_CODE: 1 })
    .then((marks) => {
      return res.status(200).json({
        success: true,
        message: `List of minor 2  marks of ${req.decoded.username}`,
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
  M1: M1,
  M2: M2,
};
