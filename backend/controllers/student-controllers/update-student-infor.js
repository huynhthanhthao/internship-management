import Account from "../../models/Account.js";
import StudentAccount from "../../models/StudentAccount.js";
import { ObjectId } from "mongodb";

const updateStudentInfor = async function (req, res, next) {
    const { studentId, name, email, phoneNumber, urlAvatar } = req.body;

    try {
        const student = await StudentAccount.findOne({ studentId });

        const result = await Account.findOneAndUpdate(
            { _id: ObjectId(student.studentId) },
            { name, email, phoneNumber, urlAvatar },
            { new: true }
        );

        return res.json({
            status: true,
            message: "Update Successfully!",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default updateStudentInfor;
