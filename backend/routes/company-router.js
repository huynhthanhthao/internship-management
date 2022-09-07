import express from "express";
import assessResult from "../controllers/company-controllers/assess-result.js";
import confirmStudent from "../controllers/company-controllers/confirm-student.js";
import searchStudent from "../controllers/company-controllers/search-student.js";
import assessTask from "../controllers/company-controllers/assess-task.js";
import createTask from "../controllers/company-controllers/create-task.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Company");
});

// Assess Result & Assess Task
router.patch("/assess-result", assessResult);

router.patch("/assess-task", assessTask);

// Confirm Student
router.post("/confirm", confirmStudent);

//Search Student By Name OR Username
router.get("/search/:searchData", searchStudent);

router.post("/create-task", createTask);

export default router;
