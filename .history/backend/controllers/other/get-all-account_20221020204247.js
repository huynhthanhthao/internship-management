import Account from "../../models/Account.js";

const getAllAccount = async (req, res, next) => {
  const { username, password, name, email, phoneNumber, typeAccount } =
    req.body;
  const urlAvatar = "https://cdn-icons-png.flaticon.com/512/1053/1053244.png";
  try {
    const findAccount = await Account.findOne({ username });
    if (!findAccount) {
      const newAccount = await Account.create({
        username,
        password,
        name,
        email,
        phoneNumber,
        urlAvatar,
        rule: typeAccount,
        createdAt: Date.now(),
      });
      return res.json({
        status: true,
        newAccount,
      });
    }
  } catch (error) {
    next(error);
  }
};
export default getAllAccount;
