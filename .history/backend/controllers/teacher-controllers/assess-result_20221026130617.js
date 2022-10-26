import TeacherAssess from "../../models/TeacherAccess.js";
import { ObjectId } from "mongodb";

const assessResult = async function (req, res, next) {
  try {
    const { studentId, points } = req.body;

    const result = await TeacherAssess.create({
      studentId: ObjectId(studentId),
      points,
    });
    return res.json({
      status: true,
      message: "Đánh giá thành công!",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export default assessResult;
