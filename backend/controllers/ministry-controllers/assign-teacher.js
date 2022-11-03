import TeacherAccount from "../../models/TeacherAccount.js";
import { ObjectId } from "mongodb";

const assignTeacher = async function (req, res, next) {
  try {
    const { teacherId, newClass } = req.body;

    // tim teacher tu req.body
    const teacher = await TeacherAccount.findOne({
      teacherId: ObjectId(teacherId),
    });
    if (teacher) {
      // Them lop quan ly moi
      teacher.classesManagement.push(newClass);
      // Cap nhat lai lop moi trong db
      await TeacherAccount.findOneAndUpdate(
        { teacherId: ObjectId(teacherId) },
        { classesManagement: teacher.classesManagement }
      );
    } else {
      res.status(404).json({
        status: false,
        message: "Dữ liệu không hợp lệ!",
      });
    }

    return res.status(201).json({
      status: true,
      message: "Phân công giảng viên thành công!",
    });
  } catch (error) {
    next(error);
  }
};

export default assignTeacher;
