import CompanyAccount from "../../models/CompanyAccount.js";
import { ObjectId } from "mongodb";
import Account from "../../models/Account";

const updateCompanyInfor = async function (req, res, next) {
  const { companyId, name, email, phoneNumber, urlAvatar, address, message } =
    req.body;
  try {
    const companyAccountUpdate = await CompanyAccount.findOneAndUpdate(
      { companyId: ObjectId(companyId) },
      { address, message },
      { new: true }
    );

    const accountUpdate = await Account.findOneAndUpdate(
      { _id: ObjectId(companyId) },
      { name, email, phoneNumber, urlAvatar },
      { new: true }
    );
  } catch (error) {}
};
