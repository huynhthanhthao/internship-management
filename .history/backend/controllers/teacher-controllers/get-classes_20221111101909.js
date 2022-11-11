import TeacherAccount from "../../models/TeacherAccount.js";
import { ObjectId } from "mongodb";

const getClasses = async (req, res, next) => {
    try {
        const { teacherId } = req.query;
        const teacher = await TeacherAccount.findOne({
            teacherId: ObjectId(teacherId),
        });
        const result = teacher.classesManagement;
        return res.json({
            status: true,
            message: "Lấy danh sách các lớp quản lý thành công!",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default getClasses;
