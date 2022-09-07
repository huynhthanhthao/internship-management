import CompanyAccount from "../../models/CompanyAccount.js";

const getAllCompany = async function (req, res, next) {
  try {
    const result = await CompanyAccount.find({});

    return res.status(201).json({
      success: "OK",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllCompany;
