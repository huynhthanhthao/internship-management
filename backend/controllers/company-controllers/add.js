import { ObjectId } from "mongodb";
import Account from "../../models/Account.js";
import StudentAccount from "../../models/StudentAccount.js";
const addCompanyAccess = async function (req, res, next) {
  try {
    const findAccount = await Account.findOne({
      _id: "63130f20fef4b8c98874b77e",
    });
    const findCompany = await Account.findOne({
      _id: "63138ba7a82803fb443dfb25",
    });
    const temp = await StudentAccount.create({
      account: findAccount,
      company: findCompany,
    });

    return res.status(201).json({
      status: "access",
      message: "Create New Account Company Access Complete.",
      temp,
    });
  } catch (error) {
    next(error);
  }
};

export default addCompanyAccess;
