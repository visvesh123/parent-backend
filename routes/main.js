// import express from "express";
const express = require("express");
const { M1, M2 } = require("../controllers/Minor");
const { Fin, finCGPA } = require("../controllers/final");
const { InOut } = require("../controllers/InOut");
const { Attend } = require("../controllers/Attend");
const verifyToken = require("../middleware/verifyToken");
const verifyAdminToken = require("../middleware/verifyAdminToken");
const { createUser, loginUser, seeUser } = require("../controllers/user");
const {
  createAdminUser,
  loginAdminUser,
  seeAdminUser,
} = require("../controllers/AdminUser");
const { Noti } = require("../controllers/notification");
const { ForgetPassword } = require("../controllers/Forget-pass");
const { resetPassword } = require("../controllers/resetPassword");
const {
  updatePasswordViaEmail,
} = require("../controllers/updatePassWithEmail");
const { Complaint } = require("../controllers/Complaint");
const { Supp } = require("../controllers/Supplementary");
const { internal } = require("../controllers/internal_Lab");
const { Major } = require("../controllers/Major");

// import { M1, M2 }=  require("../controllers/Minor";
// import { Fin, finCGPA } from "../controllers/final";
// import { InOut } from "../controllers/InOut";
// import { Attend } from "../controllers/Attend";
// const verifyToken = require("../middleware/verifyToken");
// const verifyAdminToken = require("../middleware/verifyAdminToken");
// import { createUser, loginUser, seeUser } from "../controllers/user";
// import {
//   createAdminUser,
//   loginAdminUser,
//   seeAdminUser,
// } from "../controllers/AdminUser";
// import { Noti } from "../controllers/notification";
// import { ForgetPassword } from "../controllers/Forget-pass";
// import { resetPassword } from "../controllers/resetPassword";
// import { updatePasswordViaEmail } from "../controllers/updatePassWithEmail";
// import { Complaint } from "../controllers/Complaint";
// import { Supp } from "../controllers/Supplementary";
// import { internal } from "../controllers/internal_Lab";
// import { Major } from "../controllers/Major";

const router = express.Router();
//grades
router.get("/M1/:semester", verifyToken, M1);
router.get("/M2/:semester", verifyToken, M2);
router.get("/final/:semester", verifyToken, Fin);
router.get("/supplementary/:semester", verifyToken, Supp);
router.get("/internal/:semester", verifyToken, internal);
router.get("/major/:semester", verifyToken, Major);
router.get("/cgpa", verifyToken, finCGPA);

// parent login
router.post("/login", loginUser);
router.post("/register", createUser);
router.get("/profile", verifyToken, seeUser);
router.get("/security", verifyToken, InOut);
router.get("/attendance/:semester", verifyToken, Attend);

router.get("/notifications", Noti);
router.post("/complaint", verifyToken, Complaint);

// Forgot password routes
router.post("/forgotpassword", ForgetPassword);
router.post("/reset/:token", resetPassword);
router.put("/updatePasswordViaEmail", updatePasswordViaEmail);

// Admin routes
router.post("/adminLogin", loginAdminUser);
router.post("/adminRegister", createAdminUser);
// export default router;

module.exports = router;