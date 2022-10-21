import Account from "../../models/Account.js";

const getAccount = async function (req, res, next) {
  const { accountId } = req.body;
  try {
    const account = await Account.findOne({ _id: accountId });
    if (account) {
      return res.json({
        status: true,
        message: "Lấy thông tin tài khoản thành công.",
        account,
      });
    } else {
      return res.json({
        status: false,
        message: "Không tìm thấy tài khoản!",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default getAccount;
