import Account from "../../models/Account";
import CompanyAccount from "../../models/CompanyAccount";
import StudentAccount from "../../models/StudentAccount";
import TeacherAccount from "../../models/TeacherAccount";

const createAccount = async (req, res, next) => {
  const { username, password, name, email, phoneNumber, typeAccount } =
    req.body;
  const urlAvatar = "https://cdn-icons-png.flaticon.com/512/1053/1053244.png";
  try {
    const findAccount = await Account.findOne({ username });
    if (!findAccount) {
      const newAccount = await Account.create({
        username,
        password,
        name,
        email,
        phoneNumber,
        urlAvatar,
        rule: typeAccount,
        createdAt: Date.now(),
      });

      if (typeAccount === "TEACHER") {
        const teacherAccount = await TeacherAccount.create({
          teacherId: newAccount._id,
        });
        return res.json({
          status: true,
          message: "Tạo mới một tài khoản thành công!",
          newAccount,
          teacherAccount,
        });
      }

      if (typeAccount === "STUDENT") {
        const { studentClass } = req.body;
        const studentAccount = await StudentAccount.create({
          class: studentClass,
        });
        return res.json({
          status: true,
          message: "Tạo mới một tài khoản thành công!",
          newAccount,
          studentAccount,
        });
      }

      if (typeAccount === "COMPANY") {
        const companyAccount = await CompanyAccount.create({
          companyId: newAccount._id,
        });
        return res.json({
          status: true,
          message: "Tạo mới một tài khoản thành công!",
          newAccount,
          companyAccount,
        });
      }
    } else {
      return res.json({
        status: false,
        message: "Tài khoản đã tồn tại trong hệ thống!",
      });
    }
  } catch (error) {}
};
