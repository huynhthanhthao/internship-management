import Account from "../../models/Account.js";

const getAllTeachers = async function (req, res, next) {
    try {
        const result = await Account.find({ rule: "TEACHER" });

        return res.status(201).json({
            status: true,
            message: "Lấy thông tin thành công!",

            result,
        });
    } catch (error) {
        next(error);
    }
};

export default getAllTeachers;
