import express from "express";
import assessResult from "../controllers/company-controllers/assess-result.js";
import assessTask from "../controllers/company-controllers/assess-task.js";
import confirmStudent from "../controllers/company-controllers/confirm-student.js";
import getAllAssess from "../controllers/company-controllers/get-all-assess.js";
import searchStudent from "../controllers/company-controllers/search-student.js";
import { validateParam, validateBody, schema } from "../middleware/validate.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Company");
});

//Router Tam Thoi De Test Du Lieu = Get All Assess
router.route("/assess").get(getAllAssess);

// Assess Result & Assess Task
router
  .route("/assess/:studentID")
  .post(
    validateParam(schema.idSchema, "studentID"),
    validateBody(schema.assessResult),
    assessResult
  )
  .patch(
    validateParam(schema.idSchema, "studentID"),
    validateBody(schema.assessTask),
    assessTask
  );

// Confirm Student
router
  .route("/confirm/:studentID")
  .patch(validateParam(schema.idSchema, "studentID"), confirmStudent);

//Search Student By Name OR Username
router.route("/search/:searchData").get(searchStudent);

export default router;
