import Account from "../../models/Account.js";
import CompanyAccount from "../../models/CompanyAccount.js";
import StudentAccount from "../../models/StudentAccount.js";
import TeacherAccount from "../../models/TeacherAccount.js";
import argon2 from "argon2";
const createAccount = async (req, res, next) => {
  const { username, password, name, email, phoneNumber, typeAccount } =
    req.body;
  const urlAvatar = "https://cdn-icons-png.flaticon.com/512/1053/1053244.png";
  try {
    const findAccount = await Account.findOne({ username });
    if (!findAccount) {
      const hashPassword = await argon2.hash(password);
      const newAccount = await Account.create({
        username,
        password: hashPassword,
        name,
        email,
        phoneNumber,
        urlAvatar,
        rule: typeAccount,
        createdAt: Date.now(),
      });

      if (typeAccount === "MINISTRY" || typeAccount === "ADMIN") {
        return res.json({
          status: true,
          message: "Tạo mới một tài khoản thành công!",
          newAccount,
        });
      }
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
          studentId: newAccount._id,
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
  } catch (error) {
    next(error);
  }
};

export default createAccount;
