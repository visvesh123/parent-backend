const Notification = require("../models/notification");

function Noti(req, res) {
  Notification.find({})
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
