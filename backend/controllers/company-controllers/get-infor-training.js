import Account from "../../models/Account.js";
import Task from "../../models/Task.js";
import { ObjectId } from "mongodb";

const getInforTraining = async function (req, res, next) {
    const { studentId } = req.body;
    try {
        const { name, email, phone, username, urlAvatar } =
            await Account.findOne({
                _id: ObjectId(studentId),
            });
        const tasks = await Task.find({
            studentId: ObjectId(studentId),
        });

        const result = {
            name,
            email,
            phone,
            username,
            tasks,
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

export default getInforTraining;
