import FormRegister from "../../models/FormRegister.js";
import Account from "../../models/Account.js";
import { ObjectId } from "mongodb";

const getStudentsRegister = async function (req, res, next) {
    try {
        const { companyId } = req.body;

        if (companyId) {
            const studentsRegister = await FormRegister.find({
                companyId: ObjectId(companyId),
            });

            const result = [];

            for (let i = 0; i < studentsRegister.length; i++) {
                const { username, name, email, phoneNumber, urlAvatar } =
                    await Account.findOne({
                        _id: studentsRegister[i].studentId,
                    });

                const information = {
                    username,
                    name,
                    email,
                    phoneNumber,
                    urlAvatar,
                };

                result.push(information);
            }

            return res.json({
                status: true,
                message: "Lấy danh sách ứng viên thành công!",
                result,
            });
        } else {
            res.json({
                status: false,
                message: "Không xác định được companyId!",
            });
        }
    } catch (error) {
        next(error);
    }
};

export default getStudentsRegister;
