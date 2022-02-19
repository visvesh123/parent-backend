// import mongoose from "mongoose";
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//HTNO,STUDENT_NAME,CGPA,SEM,BATCH

const cgpaSchema = new mongoose.Schema({
  HTNO: {
    type: "String",
    // required: true,
  },
  STUDENT_NAME: {
    type: "String",
    // required: true,
  },
  CGPA: {
    type: "String",
    // required: true,
  },
  SEM: {
    type: "String",
    // required: true,
  },
  BATCH: {
    type: "String",
    // required: true,
  },
});

const CGPA_som = mongoose.model("CGPA_som", cgpaSchema);

module.exports = CGPA_som;
