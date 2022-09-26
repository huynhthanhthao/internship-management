import Account from "../../models/Account.js";

const updateTeacherInfor = async function (req, res, next) {
    const {teacherId, name, email, phoneNumber, urlAvatar} = req.body
    const result = await Account.findOneAndUpdate({_id: })
};

export default updateTeacherInfor;
