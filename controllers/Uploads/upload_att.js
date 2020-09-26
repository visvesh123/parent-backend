// import mongoose from "mongoose";
// import Attendance from "../../models/Attendance";
// import { error } from "console";
// const multer = require("multer");

const mongoose = require("mongoose");
const Attendance = require("../../models/Attendance");
const { error } = require("console");
const multer = require("multer");
var csv = require("csv-parser");
var fs = require("fs");
const path = require("path");
// import acs from "../.././tmp";
const upload_Att = multer({ dest: "data" });
function upload_Attendance(req, res) {
  //   var csvfile = __dirname + "/attend.csv";
  var csvfile = __dirname + "/../.././tmp";

  console.log(req.url);

  var stream = fs.createReadStream(csvfile + `/${req.file.filename}`);
  var products = [];
  var csvStream = stream;
  stream
    .pipe(csv())
    .on("data", function (data) {
      //console.log(data);
      var item = new Attendance({
        HTNO: data["HTNO"],
        STUDENT_NAME: data["STUDENT_NAME"],
        SUB_CODE: data["SUB_CODE"],
        SUB_NAME: data["SUB_NAME"],
        LEC_P: data["LEC_P"],
        LEC_TOT: data["LEC_TOT"],
        LAB_P: data["LAB_P"],
        LAB_TOT: data["LAB_TOT"],
        TUT_P: data["TUT_P"],
        TUT_TOT: data["TUT_TOT"],
        SEM: data["SEM"],
        BATCH: data["BATCH"],
      });

      item.save(function (error) {
        // console.log(item);

        if (error) {
          throw error;
        }
      });
    })

    .on("end", function () {});
  res.json({ success: "Data imported successfully.", status: 200 });
  stream.pipe(csvStream);
}

// export { upload_Att };
module.exports = {
  upload_Attendance: upload_Attendance,
  upload_Att: upload_Att,
};
