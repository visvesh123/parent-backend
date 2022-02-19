const Notification = require("../../models/som/notification");

function Noti_som(req, res) {
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

module.exports = { Noti_som: Noti_som };
