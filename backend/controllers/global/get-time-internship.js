import CompanyAssess from "../../models/CompanyAssess.js";
import { ObjectId } from "mongodb";

const getTimeInternship = async (req, res, next) => {
  const { studentId } = req.body;
  try {
    const { createAt } = await CompanyAssess.findOne({
      studentId: ObjectId(studentId),
    });
    if (createAt) {
      return res.json({
        status: true,
        message: "Lấy thời gian bắt đầu thực tập thành công!",
        createAt,
      });
    } else {
      return res.json({
        status: false,
        message: "Sinh viên chưa tham gia thực tập!",
      });
    }
  } catch (error) {
    next(error);
  }
};
export default getTimeInternship;
