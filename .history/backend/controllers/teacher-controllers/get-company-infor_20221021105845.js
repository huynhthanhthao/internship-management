import Account from "../../models/Account.js";
import CompanyAccount from "../../models/CompanyAccount.js";
import StudentAccount from "../../models/StudentAccount.js";
import { ObjectId } from "mongodb";

const getCompanyInfor = async (req, res, next) => {
  const { studentId } = req.body;
  try {
    const { companyId } = await StudentAccount.findOne({
      studentId: ObjectId(studentId),
    });

    if (companyId) {
      const { name, email, phoneNumber } = await Account.findOne({
        _id: companyId,
      });

      const { address } = await CompanyAccount.findOne({
        companyId: companyId,
      });

      const result = { name, email, phoneNumber, address };

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
