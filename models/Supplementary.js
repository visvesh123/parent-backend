// import mongoose from "mongoose";
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//HTNO, STUDENT_NAME, BRANCH, SUB_CODE, SUB_NAME, SEMESTER, BATCH;
const suppleSchema = new mongoose.Schema({
  HTNO: {
    type: "String",
    required: true,
  },
  STUDENT_NAME: {
    type: "String",
    required: true,
  },
  BRANCH: {
    type: "String",
  },
  SUB_CODE: {
    type: "String",
    required: true,
  },

  SUB_NAME: {
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

const Supplementary = mongoose.model("Supplementary", suppleSchema);

module.exports = {
  Supplementary: Supplementary,
};
