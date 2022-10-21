import Account from "../../models/Account";
import { ObjectId } from "mongodb";

const updateAccount = async (req, res, next) => {
  const { accountId, name, email, phoneNumber, typeAccount } = req.body;
  try {
    const result = await Account.findOneAndUpdate(
      { _id: accountId },
      { name, email, phoneNumber, rule: typeAccount }
    );
  } catch (error) {}
};

export default updateAccount;
