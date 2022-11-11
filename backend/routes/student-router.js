import express from "express";
import multer from "multer";
import getAllCompanies from "../controllers/ministry-controllers/get-all-companies.js";
import getAllTasks from "../controllers/global/get-all-tasks.js";
import registerCompany from "../controllers/student-controllers/register-company.js";
import updateStudentInfor from "../controllers/student-controllers/update-student-infor.js";
import getStudentInfor from "../controllers/global/get-student-infor.js";
import getCompanyInfor from "../controllers/global/get-company-infor.js";
import getCompanyAssess from "../controllers/global/get-company-assess.js";
import getTeacherAssess from "../controllers/global/get-teacher-assess.js";
const router = express.Router();

const upload = multer({ dest: "./public/data/uploads/" });

router.get("/", (req, res) => {
  res.send("Student");
});

//GET All Company
router.get("/get-company-list", getAllCompanies);

//Get Result InternShip

router.get("/get-student-infor", getStudentInfor);

router.get("/get-company-infor", getCompanyInfor);

router.get("/get-all-task", getAllTasks);

router.get("/get-company-assess", getCompanyAssess);

router.get("/get-assess", getTeacherAssess);

router.post("/register-company", registerCompany);

router.put(
  "/update-student-infor",
  upload.single("avatar"),
  updateStudentInfor
);

// Get teacher assess
router.get("/get-teacher-assess", getTeacherAssess);

export default router;
