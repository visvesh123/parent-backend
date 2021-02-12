const Notification = require("../models/notification");

function Noti(req, res) {
  Notification.find({})
    .sort({ CREATED: -1 })
    .then((item) => {
      res.json({
        item,
      });
    })
    .catch((err) => {
      msg: err;
    });
}

module.exports = { Noti: Noti };
