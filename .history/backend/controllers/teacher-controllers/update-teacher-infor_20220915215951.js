import Account from "../../models/Account.js";
import { ObjectId } from "mongodb";
const updateTeacherInfor = async function (req, res, next) {
  const { teacherId, name, email, phoneNumber, urlAvatar } = req.body;
  const result = await Account.findOneAndUpdate(
    { _id: ObjectId(teacherId) },
    {}
  );
};

export default updateTeacherInfor;
