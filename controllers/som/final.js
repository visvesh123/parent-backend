const finalGrade = require("../../models/som/final_grade");
const CGPA = require("../../models/som/CGPA");

function Fin_som(req, res) {
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

function FinDel_som(req, res) {
  finalGrade
    .deleteMany({ HTNO: { $regex: "17XJ", $options: "i" } })
    .then(function () {
      console.log("Data deleted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });
}

function finCGPA_som(req, res) {
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
  Fin_som: Fin_som,
  finCGPA_som: finCGPA_som,
  FinDel_som: FinDel_som,
};
