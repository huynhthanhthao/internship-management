import Account from "../../models/Account.js";
const getAllAccount = async (req, res, next) => {
  console.log("RUN");
  try {
    const result = await Account.find({});
    return res.json({
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
export default getAllAccount;
