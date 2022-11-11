import Account from "../../models/Account.js";
import TeacherAccount from "../../models/TeacherAccount.js";

const getAllTeachers = async function (req, res, next) {
    try {
        const accountTeachers = await Account.find({ rule: "TEACHER" });

        const result = [];

        for (let i = 0; i < accountTeachers.length; i++) {
            const { _id, username, name, email, phoneNumber, urlAvatar } =
                accountTeachers[i];

            const { classesManagement } = await TeacherAccount.findOne({
                teacherId: _id,
            });

            result.push({
                _id,
                username,
                name,
                email,
                phoneNumber,
                urlAvatar,
                classesManagement,
            });
        }

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
