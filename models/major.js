// import mongoose from "mongoose";
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//HTNO, STUDENT_NAME, SUB_CODE, SUB_NAME, MAJOR_M, MAJOR_TOT, SEM, BATCH;

const majorSchema = new mongoose.Schema({
  HTNO: {
    type: "String",
    required: true,
  },
  STUDENT_NAME: {
    type: "String",
    required: true,
  },
  SUB_CODE: {
    type: "String",
    required: true,
  },
  SUB_NAME: {
    type: "String",
    required: true,
  },
  MAJOR_M: {
    type: "String",
    required: true,
  },
  MAJOR_TOT: {
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

const majorMarks = mongoose.model("majorMarks", majorSchema);

module.exports = majorMarks;
