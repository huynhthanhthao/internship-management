import TeacherAccount from "../../models/TeacherAccount";

const getTeacherAccount = async (req, res, next) => {
  try {
    const result = await TeacherAccount.find({});
    return res.json({ result });
  } catch (error) {
    next(error);
  }
};
export default getTeacherAccount;
