import CompanyAccount from "../../models/CompanyAccount.js";

const deleteCompany = async function (req, res, next) {
  const { companyID } = req.value.params;

  try {
    const resultDelete = await CompanyAccount.deleteOne({ account: companyID });

    return res.status(201).json({
      status: "success",
      message: "Delete Company Completed!",
    });
  } catch (error) {
    next(error);
  }
};

export default deleteCompany;
