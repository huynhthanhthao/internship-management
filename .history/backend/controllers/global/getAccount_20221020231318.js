import Account from "../../models/Account.js";

const getAccount = async function (req, res, next) {
  const { accountId } = req.body;
  try {
    const account = await Account.findOne({ _id: accountId });
  } catch (error) {
    console.log(error);
  }
};

export default getAccount;
