import Account from "../../models/Account.js";
import FormRegister from "../../models/FormRegister.js";
import { ObjectId } from "mongodb";

const getInforRegister = async function (req, res, next) {
    const { studentId, companyId } = req.body;
    try {
        const { name, email, phone, username, urlAvatar } =
            await Account.findOne({
                _id: ObjectId(studentId),
            });
        const { message, projects, gpa, languages } =
            await FormRegister.findOne({
                studentId: ObjectId(studentId),
                companyId: ObjectId(companyId),
            });

        const result = {
            name,
            email,
            phone,
            username,
            message,
            projects,
            gpa,
            languages,
            urlAvatar,
        };

        return res.json({
            status: true,
            message: "Lấy chi tiết thông tin sinh viên thành công!",
            result,
        });
    } catch (error) {
        console.log(error);
    }
};

export default getInforRegister;
