import Account from "../../models/Account.js";
const getAllAccount = async (req, res, next) => {
  try {
    const result = await Account.find({});
    return res.json({
      status: true,
      message: "Lấy tất cả các tài khoản thành công!"
      result,
    });
  } catch (error) {
    next(error);
  }
};
export default getAllAccount;
