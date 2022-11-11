import Account from "../../models/Account.js";
import CompanyAccount from "../../models/CompanyAccount.js";
import { ObjectId } from "mongodb";

const getCompanyInfor = async (req, res, next) => {
  const { companyId } = req.query;
  try {
    const { username, name, email, phoneNumber, urlAvatar } =
      await Account.findOne({ _id: ObjectId(companyId) });
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
    } else {
      return res.json({
        status: false,
        message: "Không tìm thấy đơn vị thực tập!",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default getCompanyInfor;
