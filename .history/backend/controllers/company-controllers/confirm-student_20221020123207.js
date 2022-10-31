import CompanyAssess from "../../models/CompanyAssess.js";
import { ObjectId } from "mongodb";
const confirmStudent = async function (req, res, next) {
    const { studentId, companyId } = req.body;
    console.log("123");

    try {
        const resultConfirm = await CompanyAssess.create({
            studentId: ObjectId(studentId),
            companyId: ObjectId(companyId),
        });

        return res.status(201).json({
            status: true,
            message: "Xác nhận thành công!",
            resultConfirm,
        });
    } catch (error) {
        next(error);
    }
};

export default confirmStudent;
