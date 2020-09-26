const mongoose = require("mongoose");
// const {finalGrade} = require('../models/final_grade');
const finalGrade = require("../models/final_grade");
const CGPA = require("../models/CGPA");

// export function Fin(req, res) {
//   finalGrade
//     .find({ HTNO: req.decoded.username })
//     .sort({ SUBJECT NAME: -1 })
//     .then((marks) => {
//       return res.status(200).json({
//         success: true,
//         message: `List of semester grades of ${req.decoded.username}`,
//         marks: marks,
//       });
//     })
//     .catch((err) => {
//       res.status(500).json({
//         success: false,
//         message: "Server error. Please try again.",
//         error: err.message,
//       });
//     });
// }
function Fin(req, res) {
  finalGrade
    .find({
      $and: [{ HTNO: req.decoded.username }, { SEM: req.params.semester }],
    })
    .sort({ SUB_CODE: 1 })
    .then((marks) => {
      return res.status(200).json({
        success: true,
        message: `List of  final  marks of ${req.decoded.username}`,
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

function finCGPA(req, res) {
  CGPA.find({
    $and: [{ HTNO: req.decoded.username }],
  })
    .sort({ SEM: 1 })

    .then((marks) => {
      return res.status(200).json({
        success: true,
        message: `List of  all semesters CGPA of ${req.decoded.username}`,
        CGPA: marks,
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
  Fin: Fin,
  finCGPA: finCGPA,
};
