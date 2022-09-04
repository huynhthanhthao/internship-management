import createAccount from "./create-account.js";
import CompanyAccount from "../../models/CompanyAccount.js";

const addCompany = async function (req, res, next) {
  const dataBody = req.value.body;

  try {
    const resultCreateAccount = await createAccount(dataBody, "COMPANY");

    await CompanyAccount.create({
      account: resultCreateAccount,
      address: dataBody.address,
      message: dataBody.message,
    });

    return res.status(201).json({
      status: "access",
      message: "Create New Account Company Complete.",
    });
  } catch (error) {
    next(error);
  }
};

export default addCompany;
