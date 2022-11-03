import Account from "../../models/Account.js";
import StudentAccount from "../../models/StudentAccount.js";
import { ObjectId } from "mongodb";

const getStudentList = async (req, res, next) => {
  const { className } = req.query;

  try {
    const studentAccounts = await StudentAccount.find({ class: className });

    const result = [];

    for (let i = 0; i < studentAccounts.length; ++i) {
      const { companyId, semester, schoolYear } = studentAccounts[i];

      const { _id, username, name, email, phoneNumber, urlAvatar } =
        await Account.findOne({ _id: ObjectId(studentAccounts[i].studentId) });

      const company = await Account.findOne({ _id: ObjectId(companyId) });
      result.push({
        _id,
        username,
        name,
        email,
        phoneNumber,
        urlAvatar,
        class: studentAccounts[i].class,
        semester,
        schoolYear,
        companyName: company ? company.name : "Chua tham gia thuc tap",
      });
    }
    return res.json({
      status: true,
      message: "Lấy danh sách sinh viên thành công!",
      result,
    });
  } catch (error) {
    next(error);
  }
};
export default getStudentList;
