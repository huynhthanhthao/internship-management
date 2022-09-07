import CompanyAccount from "../../models/CompanyAccount.js";
import Account from "../../models/Account.js";

const deleteCompany = async function (req, res, next) {
  const { companyID } = req.value.params;

  try {
    const resultDelete = await Account.deleteOne({ _id: companyID });

    return res.status(201).json({
      status: "success",
      message: "Delete Company Completed!",
    });
  } catch (error) {
    next(error);
  }
};

export default deleteCompany;
