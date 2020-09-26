// import mongoose from "mongoose";
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

// HTNO,
//   STUDENT_NAME,
//   SUB_CODE,
//   SUB_NAME,
//   LAB_M,
//   LAB_TOT,
//   INT_M,
//   INT_TOT,
//   SEM,
//   BATCH;

const internalSchema = new mongoose.Schema({
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
  LAB_M: {
    type: "String",
    required: true,
  },
  LAB_TOT: {
    type: "String",
    required: true,
  },
  INT_M: {
    type: "String",
    required: true,
  },
  INT_TOT: {
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

const Internal_Lab = mongoose.model("Internal_Lab", internalSchema);

module.exports = Internal_Lab;
