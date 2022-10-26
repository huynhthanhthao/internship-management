import * as dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

import Account from "../models/Account.js";

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

    //Account Infor Response
    const accountInfor = { username: account.username, email: account.email };
    return res.json({
      status: true,
      message: "Đăng nhập thành công!",
      accessToken,
      rule: account.rule,
    });
  } catch (error) {
    return res.status(400).json({ success: false, message: "Server Error!" });
  }
};

export default login;
