// import mongoose from "mongoose";
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
// HTNO, STUDENT_NAME, SUB_CODE, SUB_NAME, MARKS, MARKS_TOT, SEMESTER, BATCH;
const minorSchema = new mongoose.Schema({
  HTNO: {
    type: "String",
    required: true,
  },
  STUDENT_NAME: {
    type: "String",
    required: true,
  },
  SUB_CODE: {
    CODE: "String",
  },
  SUB_NAME: {
    type: "String",
    required: true,
  },
  MARKS: {
    type: "String",
    required: true,
  },
  MARKS_TOT: {
    type: "String",
    required: true,
  },
  SEM: {
    type: "String",
  },
  BATCH: {
    type: "String",
  },
});

const Minor1 = mongoose.model("Minor1", minorSchema);
const Minor2 = mongoose.model("Minor2", minorSchema);

module.exports = {
  Minor1: Minor1,
  Minor2: Minor2,
};
