import Account from "../../models/Account.js";
import { ObjectId } from "mongodb";

const getInforCompany = async (req, res, next) => {
  const { companyId } = req.body;
  try {
    const { username, name, email, phoneNumber, urlAvatar } =
      await Account.findOne({ companyId: ObjectId(companyId) });
  } catch (error) {}
};
