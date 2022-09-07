import express from "express";
import assessResult from "../controllers/company-controllers/assess-result.js";
import assessTask from "../controllers/company-controllers/assess-task.js";
import confirmStudent from "../controllers/company-controllers/confirm-student.js";
import searchStudent from "../controllers/company-controllers/search-student.js";
import { validateParam, validateBody, schema } from "../middleware/validate.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Company");
});

// Assess Result & Assess Task
router
  .route("/assess/:studentAccount")
  .post(
    validateParam(schema.idSchema, "studentAccount"),
    validateBody(schema.assessResult),
    assessResult
  )
  .patch(
    validateParam(schema.idSchema, "studentAccount"),
    validateBody(schema.assessTask),
    assessTask
  );

// Confirm Student
router
  .route("/confirm/:studentID")
  .post(validateParam(schema.idSchema, "studentID"), confirmStudent);

//Search Student By Name OR Username
router.route("/search/:searchData").get(searchStudent);

export default router;
