import CompanyAssess from "../../models/CompanyAssess.js";
import { ObjectId } from "mongodb";
const getCompanyAssess = async (req, res, next) => {
    const { studentId } = req.query;
    try {
        const result = await CompanyAssess.findOne({
            studentId: ObjectId(studentId),
        });
        return res.json({
            status: true,
            message: "Lấy đánh giá của đơn vị thực tập thành công!",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default getCompanyAssess;
