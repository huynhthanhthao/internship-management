import express from "express";
import createAccount from "../controllers/admin-controllers/create-account.js";
import deleteAccount from "../controllers/admin-controllers/delete-account.js";
import getAllAccount from "../controllers/admin-controllers/get-all-account.js";
import updateAccount from "../controllers/admin-controllers/update-account.js";
import confirmStudent from "../controllers/company-controllers/confirm-student.js";
import getCompanyAssess from "../controllers/other/get-company-assess.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin");
});

//Get All Account
router.get("/get-all-account", getAllAccount);

//Create New Account
router.post("/create-account", createAccount);

//Delete Account
router.delete("/delete-account", deleteAccount);

//Update Account
router.patch("/update-account", updateAccount);

//Cac router su dung tam thoi de tao du lieu cho he thong
//Create Company Assess
router.post("/create-company-assess", confirmStudent);

// Get all company assess
router.get("/get-company-assess", getCompanyAssess); // other controllers

export default router;
