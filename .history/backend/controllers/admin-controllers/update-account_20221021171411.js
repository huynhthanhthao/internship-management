import Account from "../../models/Account.js";
import { ObjectId } from "mongodb";

const updateAccount = async (req, res, next) => {
  const { accountId, name, email, phoneNumber } = req.body;
  try {
    const result = await Account.findOneAndUpdate(
      { _id: ObjectId(accountId) },
      { name, email, phoneNumber },
      { new: true }
    );
    if (result) {
      return res.json({
        status: true,
        message: "Cập nhật tài khoản thành công!",
        result,
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

export default updateAccount;
