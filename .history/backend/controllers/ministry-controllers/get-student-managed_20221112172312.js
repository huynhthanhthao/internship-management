import Account from "../../models/Account.js";
import StudentAccount from "../../models/StudentAccount.js";
import TeacherAccount from "../../models/TeacherAccount.js";
import { ObjectId } from "mongodb";

const getStudentManaged = async function (req, res, next) {
    try {
        const { teacherId } = req.query;

        const teacher = await TeacherAccount.findOne({
            teacherId: ObjectId(teacherId),
        });

        // Get class managed by teacher
        const classes = [];

        for (let i = 0; i < teacher.classesManagement.length; i++) {
            if (!classes.includes(teacher.classesManagement[i].className))
                classes.push(teacher.classesManagement[i].className);
        }

        // Get student in class
        const studentIds = [];

        for (let i = 0; i < classes.length; i++) {
            const students = await StudentAccount.find({
                class: classes[i],
            });

            for (let j = 0; j < students.length; j++) {
                // console.log(studentIds, students[j].studentId);

                // if (studentIds.includes(students[j].studentId)) {

                studentIds.push(students[j]);
                // }
            }
        }

        // get infor student list
        const studentList = [];
        for (let i = 0; i < studentIds.length; i++) {
            const { username, name, phoneNumber, email } =
                await Account.findOne({
                    _id: studentIds[i].studentId,
                });
            console.log(studentIds[i].class);
            studentList.push({
                username,
                name,
                phoneNumber,
                email,
                class: studentIds[i].class,
                semester: studentIds[i].semester,
                schoolYear: studentIds[i].schoolYear,
            });
        }

        res.json({
            status: true,
            message:
                "Lấy danh sách sinh viên quản lý bởi giảng viên thành công!",
            result: studentList,
        });
    } catch (error) {
        console.log(error);

        next(error);
    }
};

export default getStudentManaged;
