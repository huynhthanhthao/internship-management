import StudentAccount from "../../models/StudentAccount.js";
const getInforAssign = async function (req, res, next) {
    try {
        const studentList = await StudentAccount.find({});

        const classesName = [];
        const schoolYears = [];

        for (let i = 0; i < studentList.length; i++) {
            if (!classesName.includes(studentList[i].class))
                classesName.push(studentList[i].class);

            if (!schoolYears.includes(studentList[i].schoolYear))
                schoolYears.push(studentList[i].schoolYear);
        }

        const result = {
            classesName: classesName.sort(),
            schoolYears: schoolYears.sort(),
        };

        return res.json({
            status: true,
            message: "Lấy thông tin lớp thành công!",
            result,
        });
    } catch (error) {
        console.log(error);

        next(error);
    }
};

export default getInforAssign;
