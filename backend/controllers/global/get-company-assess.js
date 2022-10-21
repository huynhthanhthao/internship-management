import { ObjectId } from "mongodb";
import CompanyAssess from "../../models/CompanyAssess.js";

const getCompanyAssess = async (req, res, next) => {
  const { studentId, companyId } = req.body;
  try {
    const { points, message } = await CompanyAssess.findOne({
      studentId: ObjectId(studentId),
      companyId: ObjectId(companyId),
    });

    if (points) {
      const result = { points, message };
      return res.json({
        status: true,
        message: "Lấy đánh giá của đơn vị thực tập thành công!",
        result,
      });
    } else {
      return res.json({
        status: false,
        message: "Không xác định được sinh viên và đơn vị thực tập!",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default getCompanyAssess;
