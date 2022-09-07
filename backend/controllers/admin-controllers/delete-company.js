import Account from "../../models/Account.js";

const deleteCompany = async function (req, res, next) {
  const { companyID } = req.body;

  try {
    const resultDelete = await Account.deleteOne({ _id: companyID });

    return res.status(201).json({
      status: "success",
      message: "Delete Company Completed!",
      resultDelete,
    });
  } catch (error) {
    next(error);
  }
};

export default deleteCompany;
