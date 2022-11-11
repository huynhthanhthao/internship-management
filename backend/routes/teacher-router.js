import express from "express";
const router = express.Router();

import getCompanyAssess from "../controllers/global/get-company-assess.js";
import assessResult from "../controllers/teacher-controllers/assess-result.js";
import getAllTasks from "../controllers/global/get-all-tasks.js";
import getClasses from "../controllers/teacher-controllers/get-classes.js";
import getStudentList from "../controllers/teacher-controllers/get-student-list.js";
import getStudentInfor from "../controllers/global/get-student-infor.js";
import getCompanyInfor from "../controllers/global/get-company-infor.js";
import getTeacherAssess from "../controllers/global/get-teacher-assess.js";

router.put("/assess-result", assessResult);

router.get("/get-company-assess", getCompanyAssess);

router.get("/get-all-task", getAllTasks);

//Get student's company's detail information
router.get("/get-company-infor", getCompanyInfor);

//Get infor student
router.get("/get-student-infor", getStudentInfor);

//Get Classes List
router.get("/get-class-list", getClasses);

//Get Student List
router.get("/get-student-list", getStudentList);

//get assess
router.get("/get-assess", getTeacherAssess);

export default router;
