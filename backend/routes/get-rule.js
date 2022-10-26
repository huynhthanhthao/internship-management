import jwt from "jsonwebtoken";
import Account from "../models/Account.js";

const getRule = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.json({ status: false, message: "Token not found!" });
    }

    try {
        // decoded is username
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const account = await Account.findOne({ username: decoded });

        // return rule

        return res.json({
            status: true,
            message: "Get rule successfully!",
            rule: account.rule,
        });
    } catch (error) {
        return res.json({ status: false, message: "Invalid token!" });
    }
};

export default getRule;
