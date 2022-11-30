import CompanyAssess from "../../models/CompanyAssess.js";
import FormRegister from "../../models/FormRegister.js";
import { ObjectId } from "mongodb";
import StudentAccount from "../../models/StudentAccount.js";
const confirmStudent = async function (req, res, next) {
    const { studentId, companyId } = req.body;

    try {
        const resultConfirm = await CompanyAssess.create({
            studentId: ObjectId(studentId),
            companyId: ObjectId(companyId),
        });

        await FormRegister.find({
            studentId,
        }).remove();

        const resultUpdate = await StudentAccount.findOneAndUpdate(
            { studentId: ObjectId(studentId) },
            { companyId: ObjectId(companyId) },
            { new: true }
        );

        return res.status(201).json({
            status: true,
            message: "Xác nhận thành công!",
            resultConfirm,
            resultUpdate,
        });
    } catch (error) {
        next(error);
    }
};

export default confirmStudent;
