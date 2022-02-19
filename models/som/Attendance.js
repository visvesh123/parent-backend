// import { request } from "express";

const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise;

//HTNO,STUDENT_NAME, SUB_CODE,SUB_NAME,LEC_P,LEC_TOT,LAB_P,LAB_TOT, TUT_P,TUT_TOT,SEM,BATCH
const attendanceSchema = new mongoose.Schema({
  HTNO: {
    type: "String",
    // required: true,
  },
  STUDENT_NAME: {
    type: "String",
    // required: true,
  },
  SUB_CODE: {
    type: "String",
    // required: true,
  },
  SUB_NAME: {
    type: "String",
    // required: true,
  },
  LEC_P: {
    type: "String",
    // required: true,
  },
  LEC_TOT: {
    type: "String",
    // required: true,
  },
  // LAB_P: {
  //   type: "String",
  //   // required: true,
  // },
  // LAB_TOT: {
  //   type: "String",
  //   // required: true,
  // },
  TUT_P: {
    type: "String",
    // required: true,
  },
  TUT_TOT: {
    type: "String",
    // required: true,
  },
  SEC_FIRST :{
    type: "String"
  },
  SEC :{
    type: "String"
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

const attendance_som = mongoose.model("attendance_som", attendanceSchema);

module.exports = attendance_som;
