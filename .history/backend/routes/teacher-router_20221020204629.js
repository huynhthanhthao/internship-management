import express from "express";
const router = express.Router();

import getCompanyAssess from "../controllers/teacher-controllers/get-company-assess.js";
import assessResult from "../controllers/teacher-controllers/assess-result.js";
import getAllTasks from "../controllers/global/get-all-tasks.js";
import getAllAccount from "../controllers/other/get-all-account.js";
import getCompanyInfor from "../controllers/teacher-controllers/get-company-infor.js";

router.put("/assess-result", assessResult);

router.get("/get-company-assess/:studentId", getCompanyAssess);

router.get("/get-tasks/:studentId", getAllTasks);

//Get student's company's detail information
router.get("/get-company-infor", getCompanyInfor);

//Temp
router.post("/get-all-account", getAllAccount);

export default router;
