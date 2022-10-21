import express from "express";
import createAccount from "../controllers/admin-controllers/create-account";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin");
});

//Create New Account
router.post("/create-account", createAccount);
export default router;
