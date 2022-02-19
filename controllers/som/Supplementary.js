const { Supplementary } = require("../../models/som/Supplementary");

function Supp_som(req, res) {
  Supplementary.find({
    $and: [{ HTNO: req.decoded.username }, { SEM: req.params.semester }],
  })
    .sort({ SUB_CODE: 1 })
    .then((marks) => {
      return res.status(200).json({
        success: true,
        message: `List of  supplementary subjects  of ${req.decoded.username}`,
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

module.exports = { Supp_som: Supp_som };
