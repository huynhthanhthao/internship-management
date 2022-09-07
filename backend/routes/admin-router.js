import express from "express";
import addCompany from "../controllers/admin-controllers/add-company.js";
import deleteCompany from "../controllers/admin-controllers/delete-company.js";
import getInforTeacher from "../controllers/admin-controllers/get-infor-teacher.js";
import searchCompany from "../controllers/admin-controllers/search-company.js";
import searchTeacher from "../controllers/admin-controllers/search-teacher.js";
import updateCompany from "../controllers/admin-controllers/update-company.js";
import { validateBody, schema, validateParam } from "../middleware/validate.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin");
});

router
  .route("/company")
  // Create New Company
  .post(validateBody(schema.accountSchema), addCompany);

router
  .route("/company/:companyID")
  //Update Infor Company
  .patch(
    validateParam(schema.idSchema, "companyID"),
    validateBody(schema.updateSchema),
    updateCompany
  )
  //Delete Company By Id.
  .delete(validateParam(schema.idSchema, "companyID"), deleteCompany);

router
  .route("/teacher/:username")
  //Get infor teacher by username.
  .get(getInforTeacher);

//Search Teacher By username or name
router.route("/search-teacher/:searchData").get(searchTeacher);

//Search Company By username or name
router.route("/search-company/:searchData").get(searchCompany);

export default router;
