const express = require("express");
const {
  upload,
  Upload,
  getAllFiles,
  previewFile,
} = require("../controllers/Upload");
// const app = require("../app");

const AdminUser = require("../controllers/AdminUser");
const {
  upload_Attendance,
  upload_Att,
} = require("../controllers/Uploads/upload_att");
const {
  searchStudent,
  addChecking,
} = require("../controllers/security_portal/checking");
const searchDisplay = require("../controllers/security_portal/searchDisplay");
const allRecords = require("../controllers/security_portal/records");
const {
  seccreateUser,
  secloginUser,
} = require("../controllers/security_portal/login");

const router = express.Router();

router.post("/uploads", upload.single("file"), Upload);
router.get("/files", getAllFiles);
router.get("/files/:filename", previewFile);

router.post("/attend", upload_Att.single("file"), upload_Attendance);

// Security Portal
router.post("/security-login", secloginUser);
router.post("/security-register", seccreateUser);
router.post("/addchecking", searchStudent, addChecking);
router.post("/searchDisplay", searchDisplay);
router.get("/allRecords", allRecords);
// router.post("/AdminLogin", AdminUser);

// export default router;

module.exports = router;
