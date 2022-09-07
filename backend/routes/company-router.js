import express from "express";
import assessResult from "../controllers/company-controllers/assess-result.js";
import confirmStudent from "../controllers/company-controllers/confirm-student.js";
import searchStudent from "../controllers/company-controllers/search-student.js";
import assessTask from "../controllers/company-controllers/assess-task.js";
import { validateParam, validateBody, schema } from "../middleware/validate.js";
import createTask from "../controllers/company-controllers/create-task.js";
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Company");
});

// Assess Result & Assess Task
router.route("/assess-result/:studentId").patch(assessResult);

router.route("/assess-task").patch(assessTask);

// Confirm Student
router
    .route("/confirm/:studentID")
    .post(validateParam(schema.idSchema, "studentID"), confirmStudent);

//Search Student By Name OR Username
router.route("/search/:searchData").get(searchStudent);

router.route("/create-task").post(createTask);
export default router;
