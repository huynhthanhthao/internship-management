import express from "express";
import createAccount from "../controllers/admin-controllers/create-account.js";
import deleteAccount from "../controllers/admin-controllers/delete-account.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Admin");
});

//Create New Account
router.post("/create-account", createAccount);

//Delete Account
router.delete("/delete-account", deleteAccount);
export default router;
