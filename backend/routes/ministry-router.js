import express from "express";

import addCompanyController from "../controllers/other/add-company.js";

import assignTeacher from "../controllers/ministry-controllers/assign-teacher.js";
import getAllTeachers from "../controllers/ministry-controllers/get-all-teachers.js";
import getAllCompanies from "../controllers/ministry-controllers/get-all-companies.js";
import getInforTeacher from "../controllers/ministry-controllers/get-infor-teacher.js";
import getInforAssign from "../controllers/ministry-controllers/get-infor-assign.js";
import getStudentManaged from "../controllers/ministry-controllers/get-student-managed.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Ministry");
});

router.post(addCompanyController);

// Assign teacher
router.post("/assign-teacher", assignTeacher);

// Get all teachers
router.get("/get-all-teachers", getAllTeachers);

// Get all companies
router.get("/get-all-companies", getAllCompanies);

// Get detail infor teacher
router.get("/get-infor-teacher", getInforTeacher);

// Get infor assign teacher
router.get("/get-infor-assign", getInforAssign);

// Get student managed by teacher
router.get("/get-student-managed", getStudentManaged);

export default router;
