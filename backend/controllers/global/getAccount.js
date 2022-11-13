import Account from "../../models/Account.js";
import jwt from "jsonwebtoken";

const getAccount = async function (req, res, next) {
    const authHeader = req.body.headers.Authorization;
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) {
        return res.json({ status: false, message: "Token not found!" });
    }

    try {
        // decoded is username
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const { _id, username, name, email, phoneNumber, urlAvatar, rule } =
            await Account.findOne({
                username: decoded,
            });

        const account = {
            id: _id,
            username,
            name,
            email,
            phoneNumber,
            urlAvatar,
            rule,
        };

        // return account

        return res.json({
            status: true,
            message: "Get account successfully!",
            result: account,
        });
    } catch (error) {
        console.log(error);
        return res.json({ status: false, message: "Invalid token!" });
    }
};

export default getAccount;
