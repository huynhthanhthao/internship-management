import express from "express";
import assessResult from "../controllers/company-controllers/assess-result.js";
import confirmStudent from "../controllers/company-controllers/confirm-student.js";
import getAllTasks from "../controllers/global/get-all-tasks.js";
import assessTask from "../controllers/company-controllers/assess-task.js";
import createTask from "../controllers/company-controllers/create-task.js";
import deleteTask from "../controllers/company-controllers/delete-task.js";
import refuseRegister from "../controllers/company-controllers/refuseRegister.js";
import getStudentsRegister from "../controllers/company-controllers/get-students-register.js";
import getStudentsTraining from "../controllers/company-controllers/get-students-training.js";
import getInforRegister from "../controllers/company-controllers/get-infor-register.js";
import getInforTraining from "../controllers/company-controllers/get-infor-training.js";
import getCompanyAssess from "../controllers/global/get-company-assess.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Company");
});

// Assess Result & Assess Task
router.patch("/assess-result", assessResult);

router.patch("/assess-task", assessTask);

// Confirm Student
router.post("/confirm", confirmStudent);

// get all Tasks
router.get("/get-all-tasks", getAllTasks);

// interaction Task
router.post("/create-task", createTask);

router.delete("/delete-task", deleteTask);

// Refuse student
router.delete("/refuse-register", refuseRegister);

// Get students register
router.get("/get-students-register/", getStudentsRegister);

// Get students training
router.get("/get-students-training", getStudentsTraining);

// Get detail student register
router.get("/get-infor-register", getInforRegister);

// Get detail student traing
router.get("/get-infor-training", getInforTraining);

// Get company assess
router.get("/get-company-assess", getCompanyAssess);

export default router;
