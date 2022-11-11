import CompanyAssess from "../../models/CompanyAssess.js";
import { ObjectId } from "mongodb";

const getCompanyAssess = async function (req, res, next) {
  try {
    const { studentId } = req.query;

    const result = await CompanyAssess.findOne({
      studentId: ObjectId(studentId),
    });

    return res.json({
      status: true,
      message: "Lấy thông tin đánh giá của đơn vị thành công!",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export default getCompanyAssess;
