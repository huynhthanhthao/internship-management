import * as dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

import Account from "../models/Account.js";

const authController = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const account = await Account.findOne({ username });

    // Check exist account
    if (!account) {
      return res
        .status(401)
        .json({ success: false, message: "Account does not exist!" });
    }

    // Check valid password
    if (account.password != password) {
      return res
        .status(401)
        .json({ success: false, message: "Incorrect password!" });
    }

    // All good
    // Create token
    const accessToken = jwt.sign(
      account.username,
      process.env.ACCESS_TOKEN_SECRET
    );
    return res.json({
      success: true,
      message: "Login successful!",
      accessToken,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Server Error!" });
  }
};

export default authController;
