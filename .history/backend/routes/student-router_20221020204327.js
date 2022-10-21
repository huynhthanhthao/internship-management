import express from "express";
import getCompanies from "../controllers/student-controllers/get-companies.js";
import getResultInternShip from "../controllers/student-controllers/get-result-intership.js";
import getTasks from "../controllers/student-controllers/get-tasks.js";
import getTeacherAssess from "../controllers/student-controllers/get-teacher-assess.js";
import registerCompany from "../controllers/student-controllers/register-company.js";
import updateStudentInfor from "../controllers/student-controllers/update-student-infor.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Student");
});

//GET All Company
router.get("/get-companies", getCompanies);

//Get Result InternShip
router.get("/get-result-internship/:studentId", getResultInternShip);

router.get("/get-tasks/:studentId", getTasks);

router.post("/register-company/", registerCompany);

router.put("/update-student-infor", updateStudentInfor);

// Get teacher assess
router.get("/get-teacher-assess", getTeacherAssess);

export default router;
