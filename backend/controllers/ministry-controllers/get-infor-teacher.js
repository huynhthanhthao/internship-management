import Account from "../../models/Account.js";
import TeacherAccount from "../../models/TeacherAccount.js";
import { ObjectId } from "mongodb";

const getInforTeacher = async function (req, res, next) {
    const { teacherId } = req.body;
    try {
        const { username, name, email, phoneNumber, urlAvatar } =
            await Account.findOne({
                _id: ObjectId(teacherId),
            });

        const { classesManagement } = await TeacherAccount.findOne({
            teacherId: ObjectId(teacherId),
        });

        const result = {
            username,
            name,
            email,
            phoneNumber,
            urlAvatar,
            classesManagement,
        };

        return res.status(201).json({
            status: true,
            message: "Lấy thông tin thành công!",

            result,
        });
    } catch (error) {
        next(error);
    }
};

export default getInforTeacher;
