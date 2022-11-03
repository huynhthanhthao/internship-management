import TeacherAccount from "../../models/TeacherAccount.js";
import { ObjectId } from "mongodb";

const assignTeacher = async function (req, res, next) {
    try {
        const { teacherId, className, semester, schoolYear } = req.body;

        // tim teacher tu req.body
        const teacher = await TeacherAccount.findOne({
            teacherId: ObjectId(teacherId),
        });

        // check exist
        let checkExist = "";

        for (let i = 0; i < teacher.classesManagement.length; i++) {
            checkExist +=
                teacher.classesManagement[i].className +
                teacher.classesManagement[i].semester +
                teacher.classesManagement[i].schoolYear;
        }

        if (checkExist.includes(`${className}${semester}${schoolYear}`)) {
            return res.json({
                status: false,
                message: "Lớp này đã được phân công!",
            });
        }

        if (teacher) {
            // Them lop quan ly moi
            teacher.classesManagement.push({ className, semester, schoolYear });

            console.log(checkExist);
            // Cap nhat lai lop moi trong db
            const result = await TeacherAccount.findOneAndUpdate(
                { teacherId: ObjectId(teacherId) },
                { classesManagement: teacher.classesManagement },
                { new: true }
            );

            return res.status(201).json({
                status: true,
                message: "Phân công giảng viên thành công!",
                result,
            });
        } else {
            res.status(404).json({
                status: false,
                message: "Dữ liệu không hợp lệ!",
            });
        }
    } catch (error) {
        next(error);
    }
};

export default assignTeacher;
