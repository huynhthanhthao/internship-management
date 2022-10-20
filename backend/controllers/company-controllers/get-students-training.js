import CompanyAssess from "../../models/CompanyAssess.js";
import Account from "../../models/Account.js";

import { ObjectId } from "mongodb";

const getStudentsTraining = async function (req, res, next) {
    try {
        const { companyId } = req.body;

        if (companyId) {
            const studentsTraining = await CompanyAssess.find({
                companyId: ObjectId(companyId),
            });

            const result = [];

            for (let i = 0; i < studentsTraining.length; i++) {
                console.log(
                    await Account.findOne({
                        _id: studentsTraining[i].studentId,
                    })
                );
                const { username, name, email, phoneNumber, urlAvatar } =
                    await Account.findOne({
                        _id: studentsTraining[i].studentId,
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

            res.json({
                status: true,
                message: "Lấy danh sách sinh viên thực tập thành công!",
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

export default getStudentsTraining;
