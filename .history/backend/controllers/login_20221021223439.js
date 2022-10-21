import * as dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

import Account from "../models/Account.js";

<<<<<<< HEAD:backend/controllers/auth.js
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
=======
const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const account = await Account.findOne({ username });

        // Check valid password
        if (!account || account.password != password) {
            return res.json({
                status: false,
                message: "Tài khoản hoặc mật khẩu không đúng!",
            });
        }

        // All good
        // Create token
        const accessToken = jwt.sign(
            account.username,
            process.env.ACCESS_TOKEN_SECRET
        );
        return res.json({
            status: true,
            message: "Đăng nhập thành công!",
            accessToken,
            rule: account.rule,
        });
    } catch (error) {
        return res
            .status(400)
            .json({ success: false, message: "Server Error!" });
>>>>>>> 91f2d177a23d40e0f38c2bb6bbe00282c6628f9f:backend/controllers/login.js
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

export default login;
