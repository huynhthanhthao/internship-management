import CompanyAssess from "../../models/CompanyAssess.js";
import { ObjectId } from "mongodb";
const assessResult = async function (req, res, next) {
    const { studentId, points, message } = req.body;

    try {
        const findStudent = await CompanyAssess.findOneAndUpdate(
            { studentId: ObjectId(studentId) },
            {
                points,
                message,
            },
            { new: true }
        );

        return res.status(201).json({
            status: true,
            message: "Đánh giá kết quả thành công!",
            findStudent,
        });
    } catch (error) {
        next(error);
    }
};
export default assessResult;
