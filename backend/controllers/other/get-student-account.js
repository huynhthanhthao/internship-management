import StudentAccount from "../../models/StudentAccount.js";

const getStudentAccount = async (req, res, next) => {
  try {
    const result = await StudentAccount.find({});
    return res.json({ result });
  } catch (error) {
    next(error);
  }
};
export default getStudentAccount;
