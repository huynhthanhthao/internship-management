import Account from "../../models/Account.js";

const getName = async (req, res, next) => {
  const { username } = req.body;
  try {
    const { name } = await Account.findOne({ username });
    if (name) {
      return res.json({
        status: true,
        message: "Lấy tên tài khoản thành công!",
        name,
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
export default getName;
