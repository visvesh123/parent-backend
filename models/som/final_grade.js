// import mongoose from "mongoose";
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// HTNO,
//   BRANCH,
//   STUDENT_NAME,
//   SUB_CODE,
//   SUB_NAME,
//   GRADE,
//   POINTS,
//   CREDITS,
//   SPI,
//   SEM,
//   BATCH;

const finalGradeSchema = new mongoose.Schema({
  HTNO: {
    type: "String",
    required: true,
  },
  BRANCH: {
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
  GRADE: {
    type: "String",
    required: true,
  },
  // POINTS: {
  //   type: "String",
  //   required: true,
  // },
  CREDITS: {
    type: "String",
    required: true,
  },
  SPI: {
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

const finalGrade_som = mongoose.model("finalGrade_som", finalGradeSchema);

module.exports = finalGrade_som;
