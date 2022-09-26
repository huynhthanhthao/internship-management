import CompanyAccount from "../../models/CompanyAccount.js";
import { ObjectId } from "mongodb";

const updateCompanyInfor = async function (req, res, next) {
  const { companyId, name, email, phoneNumber, urlAvatar } = req.body;
  try {
    const companyAccountUpdate = await CompanyAccount.findOneAndUpdate(
      { companyId: ObjectId(companyId) },
      {}
    );
  } catch (error) {}
};
