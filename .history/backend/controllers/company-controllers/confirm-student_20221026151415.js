import CompanyAssess from "../../models/CompanyAssess.js";
import { ObjectId } from "mongodb";
import StudentAccount from "../../models/StudentAccount.js";
const confirmStudent = async function (req, res, next) {
  const { studentId, companyId } = req.body;

  try {
    const resultConfirm = await CompanyAssess.create({
      studentId: ObjectId(studentId),
      companyId: ObjectId(companyId),
    });

    await StudentAccount.findOneAndUpdate(
      { studentId: ObjectId(studentId) },
      { companyId: ObjectId(companyId) },
      { new: true }
    );

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
