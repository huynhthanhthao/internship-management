import express from "express";

// import controllers
import authController from "../controllers/auth.js";

const router = express.Router();

router.post("/login", authController);

export default router;
