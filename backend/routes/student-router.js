import express from "express";
import getAllCompany from "../controllers/student-controllers/get-companys.js";
import getResultInternShip from "../controllers/student-controllers/get-result-intership.js";
import getTask from "../controllers/student-controllers/get-tasks.js";
import registerCompany from "../controllers/student-controllers/register-company.js";
import { validateParam, validateBody, schema } from "../middleware/validate.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Student");
});

//GET All Company
router.route("/company").get(getAllCompany);

//Get Result InternShip
router
  .route("/result/:studentAccount")
  .get(validateParam(schema.idSchema, "studentAccount"), getResultInternShip);

//Get Task
router
  .route("/task/:studentAccount")
  .get(validateParam(schema.idSchema, "studentAccount"), getTask);

router
  .route("/register-company/:companyAccount")
  .post(validateParam(schema.idSchema, "companyAccount"), registerCompany);
export default router;
