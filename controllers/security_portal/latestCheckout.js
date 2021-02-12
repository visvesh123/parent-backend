const mongoose = require("mongoose");
const security = require("../../models/security");


const latestRecord =  (req,res) => {
    security.find({HTNO : req.params.htno})
    .sort({DATE : -1}).then((user) => {
        return res.status(200).json({
          success: true,
  
          message: `Record of  ${req.params.htno}`,
          user_moving: user[0].MOVING,
          // HTNO: user.HTNO,
          // STUDENT_NAME: user.STUDENT_NAME,
          // BRANCH: user.BRANCH,
          // MOVING: user.MOVING,
          // REMARKS: user.REMARKS,
          // DATE: moment(user.DATE).format("MMMM Do YYYY, h:mm:ss a"),
          // BATCH: user.BATCH,
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

module.exports = latestRecord 