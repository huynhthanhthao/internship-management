import TeacherAccess from "../../models/TeacherAccess.js";
import { ObjectId } from "mongodb";
const getTeacherAssess = async (req, res, next) => {
  const { studentId } = req.body;
  console.log(studentId);
  try {
    const { points } = TeacherAccess.findOne({
      studentId: ObjectId(studentId),
    });
    console.log(points);
    if (points) {
      return res.json({
        status: true,
        message: "Lấy đánh giá của giảng viên thành công!",
        points,
      });
    } else {
      return res.json({
        status: false,
        message: "Không tìm thấy kết quả đánh giá của sinh viên!",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default getTeacherAssess;
