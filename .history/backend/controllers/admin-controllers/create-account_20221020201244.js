import Account from "../../models/Account";
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
        createdAt: Date.now(),
      });
      if (typeAccount === "teacher") {
        const teacherAccount = await TeacherAccount.create({
          teacherId: newAccount._id,
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
