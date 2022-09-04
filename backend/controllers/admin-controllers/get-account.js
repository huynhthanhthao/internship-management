import Account from "../../models/Account.js";

const getAllAccount = async function (req, res, next) {
  try {
    const result = await Account.find({});
    return res.status(201).json({
      success: "OK",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllAccount;
