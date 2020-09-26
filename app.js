// import express from "express";
// import mongoose from "mongoose";
// import path from "path";
// import cors from "cors";
// import bodyParser from "body-parser";
// import morgan from "morgan";
// import config from "./config";
const config = require("./config");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
// const morgan = require("morgan");
const nodemailer = require("nodemailer");
const methodOverride = require("method-override");

require("dotenv").config();

const Notification = require("./models/notification");
const Login = require("./models/login");
const finalGrade = require("./models/final_grade");

const { Mail } = require("./controllers/Mail");
const Complaint = require("./controllers/Complaint");
const MainRoutes = require("./routes/main");
const AdminRoutes = require("./routes/admin");
const security = require("./models/security");
const Attendance = require("./models/Attendance");

// import security from "./models/security";
// import Attendance from "./models/Attendance";
// import { Minor2, Minor1 } from "./models/minor";
// import { Supplementary } from "./models/Supplementary";
const CGPA = require("./models/CGPA");

const { Users } = require("./models/User");
const Internal_Lab = require("./models/Internal_Lab");
const majorMarks = require("./models/major");

const app = express();
app.use(methodOverride("_method"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(morgan("dev"));
app.use(bodyParser.json());

const { MONGO_URI, MONGO_DB_NAME } = config;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }) // Adding new mongo url parser
  .then(() => console.log("Connected to database in cluster"))
  .catch((err) => console.log(err));

app.use("/portal/", MainRoutes);
app.use("/admin/", AdminRoutes);

// Notification.create({
//   STATUS: "c",
//   TILL: new Date(),
//   SUBJECT: "xcvx",
//   DESCRIPTION: "sfdc",
// });
// finalGrade.create({
//   HTNO: "43",
//   BRANCH: "cs",
//   STUDENT_NAME: "fs",
//   SUB_CODE: "ef",
//   SUB_NAME: "fdf",
//   GRADE: "sfd",
//   POINTS: "sfs",
//   CREDITS: "fd",
//   SPI: "dfd",
//   SEM: "df",
//   BATCH: "scdd",
// });

// Minor2.create({
//   HTNO: "ed",
//   STUDENT_NAME: "fss",
//   SUB_CODE: "dd",
//   SUB_NAME: "sc",
//   MARKS: "scc",
//   MARKS_TOT: "sx",
//   SEM: "ccx",
//   BATCH: "sc",
// });
//HTNO, STUDENT_NAME, BRANCH, SUB_CODE, SUB_NAME, SEMESTER, BATCH;
// Supplementary.create({
//   HTNO: "32",
//   STUDENT_NAME: "dscd",
//   BRANCH: "fd",
//   SUB_CODE: "SDSS",

//   SUB_NAME: "2",
//   SEM: "Failed",
//   BATCH: "cx",
// });

// Login.create({
//   HTNO: "2e43",
//   STUDENT_NAME: "sfd",
//   STUDENT_EMAIL: "rvg",
//   STUDENT_MOBILE: "4rf4re",
//   FATHER_NAME: "452",
//   PARENTS_MOBILE: "fsdcc",
//   PARENTS_EMAIL: "fcd",
//   PASSWORD: "r4ewr",
//   BATCH: "scxc",
//   RESET_TOKEN: "cc",
// });

//InOut
// security.create({
//   HTNO: "adfg",
//   STUDENT_NAME: "erg",
//   BRANCH: "dg",
//   MOVING: "gdd",
//   REMARKS: "dth",
//   DATE: new Date(),
//   BATCH: "sghb",
// });

// Attendance.create({
//   HTNO: "1322",
//   STUDENT_NAME: "535",
//   SUB_CODE: "rw",
//   SUB_NAME: "ff",
//   LEC_P: "343",
//   LEC_TOT: "ew",
//   LAB_P: "3r3",
//   LAB_TOT: "rer",
//   TUT_P: "fs",
//   TUT_TOT: "w4re",
//   SEM: "3",
//   BATCH: "fas",
// });

//EID, NAME, EMAIL, PASSWORD, TYPE;

// Users.create({
//   EID: "fdc",
//   NAME: "dsf",
//   EMAIL: "cx",
//   PASSWORD: "fdc",
//   TYPE: "cxcx",
// });
// app.get('/m1',(req,res)=>{
//     Minor1.find({},(err,m1)=>{
//         res.status(200).json(
//             {m1}
//         )
//     })
// })

// app.get('/m2',(req,res)=>{
//     Minor2.find({},(err,m2)=>{
//         res.status(200).json(
//             {m2}
//         )
//     })
// })

//app.post("/send", Mail);

// Internal_Lab.create({
//   HTNO: "dss",
//   STUDENT_NAME: "fsf",
//   SUB_CODE: "ccc",
//   SUB_NAME: "vv",
//   LAB_M: "sc",
//   LAB_TOT: "ssx",
//   INT_M: "sc",
//   INT_TOT: "dsxs",
//   SEM: "z",
//   BATCH: "xz",
// });

// majorMarks.create({
//   HTNO: "dss",
//   STUDENT_NAME: "fsf",
//   SUB_CODE: "ccc",
//   SUB_NAME: "vv",
//   MAJOR_M: "cx",
//   MAJOR_TOT: "Czc",
//   SEM: "z",
//   BATCH: "xz",
// });

//HTNO, STUDENT_NAME, CGPA, SEM, BATCH;

// CGPA.create({
//   HTNO: "fs",
//   STUDENT_NAME: "sc",
//   CGPA: "sc",
//   SEM: "fssd",
//   BATCH: "sc",
// });

app.get("/users", (req, res) => {
  Login.find({}, (err, login) => {
    res.status(200).json({ login });
  });
});

app.get("/admin", (req, res) => {
  User.find({}, (err, user) => {
    res.status(200).json({ user });
  });
});

app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Welcome to parents portal",
  });
});

// app.get("*", (req, res) => {
//   res.status(400).json({
//     message:
//       "This is Parents portal. Please see documentation for the proper routes.",
//   });
// });

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html")); // relative path
  });
}
const { PORT } = config;

// const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Connected to Port No : ${PORT}`);
});

module.exports = app;
