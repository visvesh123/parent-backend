// import jwt from "jsonwebtoken";
const jwt = require("jsonwebtoken");
// import dotenv from "dotenv";
const dotenv = require("dotenv");
dotenv.config();
const key = process.env.KEY;
const AdminToken = (id, adminID) =>
  jwt.sign({ id, adminID }, key, { expiresIn: "2h" });

module.exports = AdminToken;
// export default AdminToken;
