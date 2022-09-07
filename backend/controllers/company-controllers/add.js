import CompanyAccess from "../../models/CompanyAccess.js";
import Account from "../../models/Account.js";
const addCompanyAccess = async function (req, res, next) {
  try {
    const temp = await Account.findOne({ _id: "63138ba7a82803fb443dfb25" });

    console.log("temp", temp);

    const temp2 = await CompanyAccess.create({
      studentAccount: temp,
      disPoints: 20,
      techPoint: 20,
    });

    console.log(temp2);
    return res.status(201).json({
      status: "access",
      message: "Create New Account Company Access Complete.",
    });
  } catch (error) {
    next(error);
  }
};

export default addCompanyAccess;
