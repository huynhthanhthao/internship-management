import TeacherAssess from "../../models/TeacherAccess.js";
const assessResult = async function (req, res, next) {
    try {
        const { studentId, points } = req.body;

        const result = await TeacherAssess.findOneAndUpdate(
            { studentId },
            { points },
            { new: true, upsert: true }
        );
        return res.json({
            status: true,
            message: "Đánh giá thành công!",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default assessResult;
