const Attendance = require("../models/Attendance");

function Attend(req, res) {
  Attendance.find({
    $and: [{ HTNO: req.decoded.username }, { SEM: req.params.semester }],
  })
    .sort({ "SUBJECT NAME": 1 })
    .then((Att) => {
      return res.status(200).json({
        success: true,
        message: `Attendance List ${req.decoded.username}`,
        Attendance: Att,
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

module.exports = { Attend: Attend };
