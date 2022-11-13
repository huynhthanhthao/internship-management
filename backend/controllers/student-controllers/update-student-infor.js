import Account from "../../models/Account.js";
import { ObjectId } from "mongodb";

const updateStudentInfor = async function (req, res, next) {
    const { accountId, email, phoneNumber, password, password2, urlAvatar } =
        req.body;

    try {
        const result = await Account.findOneAndUpdate(
            { _id: ObjectId(accountId) },
            { email, phoneNumber, urlAvatar, password },
            { new: true }
        );

        return res.json({
            status: true,
            message: "Cập nhật thông tin thành công!",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default updateStudentInfor;
