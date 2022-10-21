import Account from "../../models/Account.js";
import CompanyAssess from "../../models/CompanyAssess.js";
import CompanyAccount from "../../models/CompanyAccount.js";
import { ObjectId } from "mongodb";

const getCompanyInfor = async (req, res, next) => {
  const { studentId } = req.body;
  try {
    const { companyId } = CompanyAssess.findOne({
      studentId: ObjectId(studentId),
    });
    if (companyId) {
      const { name, email, phone } = Account.findOne({ _id: companyId });
      const { address } = CompanyAccount.findOne({ _id: companyId });
      const result = { name, email, phone, address };
      return res.json({
        status: true,
        message: "Lấy thông tin đơn vị thực tập của sinh viên thành công!",
        result,
      });
    } else {
      return res.json({
        status: false,
        message: "Sinh viên không có đơn vị thực tập!",
      });
    }
  } catch (error) {
    next(error);
  }
};

export default getCompanyInfor;
