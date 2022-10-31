import Account from "../../models/Account.js";
import TeacherAccount from "../../models/TeacherAccount.js";
import CompanyAccount from "../../models/CompanyAccount.js";
import CompanyAssess from "../../models/CompanyAssess.js";
import FormRegister from "../../models/FormRegister.js";
import StudentAccount from "../../models/StudentAccount.js";
import Task from "../../models/Task.js";
import TeacherAccess from "../../models/TeacherAccess.js";
import { ObjectId } from "mongodb";

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
      }

      if (rule === "COMPANY") {
        await CompanyAccount.findOneAndDelete({
          companyId: accountDeleted._id,
        });
        await CompanyAssess.deleteMany({ companyId: accountDeleted._id });
        await FormRegister.deleteMany({ companyId: accountDeleted._id });
        await StudentAccount.updateMany(
          { companyId: accountDeleted._id },
          { $set: { companyId: "" } }
        );
      }

      if (rule === "STUDENT") {
        await CompanyAssess.findOneAndDelete({ studentId: accountDeleted._id });
        await TeacherAccess.findOneAndDelete({ studentId: accountDeleted._id });
        await FormRegister.deleteMany({ studentId: accountDeleted._id });
        await StudentAccount.findOneAndDelete({
          studentId: accountDeleted._id,
        });
        await Task.deleteMany({ studentId: accountDeleted._id });
      }
      return res.json({
        status: true,
        message: "Xóa tài khoản thành công!",
      });
    } else {
      return res.json({
        status: false,
        message: "Không tìm thấy tài khoản để xóa!",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default deleteAccount;
