import CompanyAccess from "../../models/CompanyAccess.js";
import { ObjectId } from "mongodb";
const confirmStudent = async function (req, res, next) {
  const { studentId, companyId } = req.body;
  console.log("123");

  try {
    const resultConfirm = await CompanyAccess.create({
      studentId: ObjectId(studentId),
      companyId: ObjectId(companyId),
    });

    return res.status(201).json({
      status: "success",
      message: "Confirm Student Completed",
      resultConfirm,
    });
  } catch (error) {
    next(error);
  }
};

export default confirmStudent;
