const finalGrade = require("../models/final_grade");
const CGPA = require("../models/CGPA");

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

function FinDel(req, res) {
  finalGrade
    .deleteMany({ HTNO: { $regex: "17XJ", $options: "i" } })
    .then(function () {
      console.log("Data deleted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
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
  FinDel: FinDel,
};
