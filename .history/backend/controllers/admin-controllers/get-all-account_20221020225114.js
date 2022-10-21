import Account from "../../models/Account.js";
const getAllAccount = async (req, res, next) => {
  try {
    const { username, name, email, phoneNumber, urlAvatar, createAt, rule } =
      await Account.find({});
    const result = {
      username,
      name,
      email,
      phoneNumber,
      urlAvatar,
      createAt,
      rule,
    };
    return res.json({
      status: true,
      message: "Lấy tất cả các tài khoản thành công!",
      result,
    });
  } catch (error) {
    next(error);
  }
};
export default getAllAccount;
