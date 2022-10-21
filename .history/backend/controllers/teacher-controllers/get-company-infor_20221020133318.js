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
      const { address } = CompanyAccount.findOne;
    }
  } catch (error) {}
};
