import TeacherAccess from "../../models/TeacherAccess";
import { ObjectId } from "mongodb";
const getTeacherAssess = async (req, res, next) => {
  const { studentId } = req.body;
  try {
    const { point } = TeacherAccess.findOne({ studentId: ObjectId(studentId) });
    if (point) {
      return res.json({
        status: true,
        message: "Lấy đánh giá của giảng viên thành công!",
        point,
      });
    } else {
      return res.json({
        status: false,
        message: "Không tìm thấy kết quả đánh giá của sinh viên!",
      });
    }
  } catch (error) {}
};
