import express from "express";

// import controllers
import login from "../controllers/login.js";

const router = express.Router();

router.post("/login", login);

export default router;
