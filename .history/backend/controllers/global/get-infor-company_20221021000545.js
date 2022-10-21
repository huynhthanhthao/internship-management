import Account from "../../models/Account.js";
import CompanyAccount from "../../models/CompanyAccount.js";
import { ObjectId } from "mongodb";

const getInforCompany = async (req, res, next) => {
  const { companyId } = req.body;
  try {
    const { username, name, email, phoneNumber, urlAvatar } =
      await Account.findOne({ companyId: ObjectId(companyId) });
    if (username) {
      const { address, message } = await CompanyAccount.findOne({
        companyId: ObjectId(companyId),
      });
      const result = {
        username,
        name,
        email,
        phoneNumber,
        urlAvatar,
        address,
        message,
      };
      return res.json({
        status: true,
        message: "Lấy thông tin đơn vị thực tập thành công!",
        result,
      });
    }
  } catch (error) {}
};
