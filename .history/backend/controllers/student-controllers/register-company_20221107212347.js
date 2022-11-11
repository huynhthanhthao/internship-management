import FormRegister from "../../models/FormRegister.js";
import { ObjectId } from "mongodb";
const registerCompany = async function (req, res, next) {
  const { studentId, companyId, gpa, languages, projects, message } = req.body;

  try {
    await FormRegister.create({
      studentId: ObjectId(studentId),
      companyId: ObjectId(companyId),
      gpa,
      languages,
      projects,
      message,
    });

    return res.json({
      status: true,
      message: "Đăng ký thành công!",
    });
  } catch (error) {
    next(error);
  }
};

export default registerCompany;
