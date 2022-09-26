import express from "express";
const router = express.Router();

import getCompanyAssess from "../controllers/teacher-controllers/get-company-assess.js";
import assessResult from "../controllers/teacher-controllers/assess-result.js";
import getTasks from "../controllers/teacher-controllers/get-tasks.js";
import searchStudent from "../controllers/teacher-controllers/search-student.js";

router.put("/assess-result", assessResult);
router.get("/get-company-assess/:studentId", getCompanyAssess);
router.get("/get-tasks/:studentId", getTasks);
router.get("/search-student", searchStudent);

export default router;
