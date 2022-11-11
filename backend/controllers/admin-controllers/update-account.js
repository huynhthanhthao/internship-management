import Account from "../../models/Account.js";
import { ObjectId } from "mongodb";
import argon2 from "argon2";

const updateAccount = async (req, res, next) => {
    const { accountId, name, password } = req.body;

    // simple validate
    if (!name || !password) {
        return res.json({
            status: false,
            message: "Vui lòng điền đầy đủ thông tin!",
        });
    }

    try {
        const hashedPassword = await argon2.hash(password);

        const result = await Account.findOneAndUpdate(
            { _id: ObjectId(accountId) },
            { name, password: hashedPassword },
            { new: true }
        );
        if (result) {
            return res.json({
                status: true,
                message: "Cập nhật tài khoản thành công!",
                result,
            });
        } else {
            return res.json({
                status: false,
                message: "Không tìm thấy tài khoản!",
            });
        }
    } catch (error) {
        next(error);
    }
};

export default updateAccount;
