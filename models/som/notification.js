// import mongoose from "mongoose";
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

//STATUS, CREATED, TILL, SUBJECT, DESCRIPTION;
const notificationSchema = mongoose.Schema({
  STATUS: {
    type: "String",
    required: true,
  },
  CREATED: {
    type: "Date",
    default: Date.now(),
  },
  TILL: {
    type: "Date",
    required: true,
  },
  SUBJECT: {
    type: "String",
    required: true,
  },
  DESCRIPTION: {
    type: "String",
    required: true,
  },
});

const Notification_som = mongoose.model("Notification_som", notificationSchema);

module.exports = Notification_som;
