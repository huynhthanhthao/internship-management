import express from "express";
import createAccount from "../controllers/admin-controllers/create-account.js";
import deleteAccount from "../controllers/admin-controllers/delete-account.js";
import getAllAccount from "../controllers/admin-controllers/get-all-account.js";
import updateAccount from "../controllers/admin-controllers/update-account.js";

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
export default router;
