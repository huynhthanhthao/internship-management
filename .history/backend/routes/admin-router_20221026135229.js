import express from "express";
import createAccount from "../controllers/admin-controllers/create-account.js";
import deleteAccount from "../controllers/admin-controllers/delete-account.js";
import getAllAccount from "../controllers/admin-controllers/get-all-account.js";
import updateAccount from "../controllers/admin-controllers/update-account.js";
import confirmStudent from "../controllers/company-controllers/confirm-student.js";
import createTask from "../controllers/company-controllers/create-task.js";
import getCompanyAssess from "../controllers/other/get-company-assess.js";
import assessTask from "../controllers/company-controllers/assess-task.js";
import getTask from "../controllers/global/get-all-tasks.js";
import getTeacherAssess from "../controllers/other/get-all-teacher-assess.js";
import assignClass from "../controllers/ministry-controllers/assign-teacher.js";
import getTeacherAccount from "../controllers/other/get-teacher-account.js";

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

//Create Task
router.post("/create-task", createTask);

//Assess Task
router.patch("/assess-task", assessTask);

//Get Task Student Id
router.get("/get-task", getTask);

// Get all Teacher assess
router.get("/teacher-assess", getTeacherAssess);

//Get Teacher Account
router.get("/get-teacher-account", getTeacherAccount);
router.patch("/assign-class", assignClass);
export default router;
