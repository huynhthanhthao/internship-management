// import Account from "../../models/Account.js";
import CompanyAccount from "../../models/CompanyAccount.js";

const getAllAccount = async (req, res, next) => {
  try {
    const result = await CompanyAccount.find({});
    return res.json({
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
export default getAllAccount;
