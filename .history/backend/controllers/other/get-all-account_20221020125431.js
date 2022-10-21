import Account from "../../models/Account";
const getAllAccount = async (req, res, next) => {
  try {
    const result = await Account.find({});
    return res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
};
export default getAllAccount;
