// import Account from "../../models/Account.js";
import CompanyAssess from "../../models/CompanyAssess.js";
const getAllAccount = async (req, res, next) => {
  try {
    const result = await CompanyAssess.find({});
    return res.json({
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
export default getAllAccount;
