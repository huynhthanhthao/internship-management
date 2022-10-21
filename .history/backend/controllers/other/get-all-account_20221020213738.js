// import Account from "../../models/Account.js";

// import Account from "../../models/Account.js";
import StudentAccount from "../../models/StudentAccount.js";
const getAllAccount = async (req, res, next) => {
  try {
    const result = await StudentAccount.find({});
    return res.json({
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
export default getAllAccount;
