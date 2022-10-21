import Account from "../../models/Account.js";
import TeacherAccount from "../../models/TeacherAccount.js";
import CompanyAccount from "../../models/CompanyAccount.js";
import CompanyAssess from "../../models/CompanyAssess.js";
import FormRegister from "../../models/FormRegister.js";
import { ObjectId } from "mongodb";
import StudentAccount from "../../models/StudentAccount.js";
const deleteAccount = async (req, res, next) => {
  const { accountId } = req.body;
  try {
    const accountDeleted = await Account.findOneAndDelete({
      _id: ObjectId(accountId),
    });

    if (accountDeleted) {
      const rule = accountDeleted.rule;
      if (rule === "TEACHER") {
        await TeacherAccount.findOneAndDelete({
          teacherId: accountDeleted._id,
        });
      } else if (rule === "COMPANY") {
        await CompanyAccount.findOneAndDelete({
          companyId: accountDeleted._id,
        });
        await CompanyAssess.findOneAndDelete({ companyId: accountDeleted._id });
        await FormRegister.findOneAndDelete({ companyId: accountDeleted._id });
        await StudentAccount.findOneAndUpdate({ companyId: "" });
      }
      return res.json({
        status: true,
        message: "Xóa tài khoản thành công!",
      });
    }
    return res.json({
      accountDeleted,
    });
  } catch (error) {
    next(error);
  }
};

export default deleteAccount;
