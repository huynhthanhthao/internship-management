import Account from "../../models/Account";
import { ObjectId } from "mongodb";
const deleteAccount = async (req, res, next) => {
  const { accountId } = req.body;
  try {
    const accountDeleted = await Account.findOneAndDelete({
      _id: ObjectId(accountId),
    });
    return res.json{

        accountDeleted
    }
    
  } catch (error) {
    next(error);
  }
};

export default deleteAccount;
