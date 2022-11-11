import argon2 from "argon2";
import * as dotenv from "dotenv";

dotenv.config();

import jwt from "jsonwebtoken";
import Account from "../models/Account.js";

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const account = await Account.findOne({ username });

        // Check valid password
        if (!account) {
            return res.json({
                status: false,
                message: "Tài khoản hoặc mật khẩu không đúng!",
            });
        }

        const passwordValid = await argon2.verify(account.password, password);

        if (!passwordValid)
            return res.json({
                status: false,
                message: "Tài khoản hoặc mật khẩu không đúng!",
            });

        // All good
        // Create token
        const accessToken = jwt.sign(
            account.username,
            process.env.ACCESS_TOKEN_SECRET
        );

        //Account Infor Response
        const accountInfor = {
            id: account._id,
            name: account.name,
            username: account.username,
            email: account.email,
            phoneNumber: account.phoneNumber,
            urlAvatar: account.urlAvatar,
        };

        return res.json({
            status: true,
            message: "Đăng nhập thành công!",
            accessToken,
            accountInfor,
            rule: account.rule,
        });
    } catch (error) {
        console.log(error);
        return res
            .status(400)
            .json({ success: false, message: "Server Error!" });
    }
};

export default login;
