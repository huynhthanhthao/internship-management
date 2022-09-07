import express from "express";

import addCompanyController from "../controllers/admin-controllers/add-company.js";

import checkRule from "../middleware/check-rule.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Admin");
});

router.post(
    "/add-company",
    (req, res, next) => checkRule(req, res, next, "ADMIN"),
    addCompanyController
);

export default router;
