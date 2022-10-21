import Account from "../../models/Account.js";

const getName = async (req, res, next) => {
  const { username } = req.body;
  try {
    const result = await Account.findOne({ username });
    if (result) {
      return res.json({
        status: true,
        message: "Lấy tên tài khoản thành công!",
        result.name,
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
