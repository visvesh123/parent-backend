// import dotenv from "dotenv";
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 3001,
  MONGO_URI:
    "mongodb+srv://ParentsPortal:parents1234@portalcluster.jgx1x.mongodb.net/portal?retryWrites=true&w=majority",
  MONGO_DB_NAME: "portal",
  JWT_SECRET: process.env.JWT_SECRET,
};
