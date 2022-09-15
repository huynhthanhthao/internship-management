import express from "express";
const router = express.Router();

import getCompanyAssess from "../controllers/teacher-controllers/get-company-assess.js";
import assessResult from "../controllers/teacher-controllers/assess-result.js";

router.put("/assess-result", assessResult);
router.get("/get-company-assess/:studentId", getCompanyAssess);

export default router;
