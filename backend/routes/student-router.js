import express from "express";
import getAllCompany from "../controllers/student-controllers/get-companys.js";
import getResultInternShip from "../controllers/student-controllers/get-result-intership.js";
import getTask from "../controllers/student-controllers/get-tasks.js";
import { validateParam, validateBody, schema } from "../middleware/validate.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Student");
});

//GET All Company
router.route("/company").get(getAllCompany);

//Get Result InternShip
router
  .route("/result/:studentID")
  .get(validateParam(schema.idSchema, "studentID"), getResultInternShip);

//Get Task => Chua Xac Dinh Ro Cach To Chuc Du Lieu Va Cach Thuc Thi
router
  .route("/task/:studentID")
  .get(validateParam(schema.idSchema, "studentID"), getTask);

export default router;
