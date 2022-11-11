import TeacherAccess from "../../models/TeacherAccess.js";
import { ObjectId } from "mongodb";

const getTeacherAssess = async (req, res, next) => {
    const { studentId } = req.query;
    try {
        const teacherAssess = await TeacherAccess.findOne({
            studentId: ObjectId(studentId),
        });
        return res.json({
            status: true,
            message: "Lấy đánh giá của giảng viên thành công!",
            points: teacherAssess ? teacherAssess.points : [],
        });
    } catch (error) {
        next(error);
    }
};

export default getTeacherAssess;
