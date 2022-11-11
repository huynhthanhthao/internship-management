import Account from "../../models/Account.js";
import StudentAccount from "../../models/StudentAccount.js";
import { ObjectId } from "mongodb";
import CompanyAssess from "../../models/CompanyAssess.js";

const getStudentInfor = async (req, res, next) => {
  const { studentId } = req.query;
  try {
    const { username, name, email, phoneNumber, urlAvatar } =
      await Account.findOne({ _id: ObjectId(studentId) });

    const studentAccount = await StudentAccount.findOne({
      studentId: ObjectId(studentId),
    });
    const companyAssess = await CompanyAssess.findOne({
      studentId: ObjectId(studentId),
    });
    const result = {
      studentId,
      username,
      name,
      email,
      phoneNumber,
      urlAvatar,
      class: studentAccount.class,
      semester: studentAccount.semester,
      schoolYear: studentAccount.schoolYear,
      companyId:
        studentAccount.companyId === undefined
          ? null
          : studentAccount.companyId,
      startDate: companyAssess === null ? 0 : companyAssess.createdAt,
    };

    return res.json({
      status: true,
      message: "Lấy thông tin sinh viên thành công!",
      result,
    });
  } catch (error) {
    next(error);
  }
};
export default getStudentInfor;
