// import Account from "../../models/Account.js";

import TeacherAccess from "../../models/TeacherAccess.js";

const getAllAccount = async (req, res, next) => {
  try {
    const result = await TeacherAccess.find({});
    return res.json({
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
export default getAllAccount;
