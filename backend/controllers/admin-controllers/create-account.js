import Account from "../../models/Account.js";

const createAccount = function (dataAccount, typeAccount) {
  return Account.create({
    username: dataAccount.username,
    password: dataAccount.password,
    name: dataAccount.name,
    email: dataAccount.email,
    phoneNumber: dataAccount.phoneNumber,
    urlAvatar: dataAccount.urlAvatar,
    rule: typeAccount,
  });
};

export default createAccount;
