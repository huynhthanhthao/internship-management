// import Account from "../../models/Account.js";

import StudentAccount from "../../models/StudentAccount.js";

// import Account from "../../models/Account.js";
// import StudentAccount from "../../models/StudentAccount";

const getAllAccount = async (req, res, next) => {
  try {
    const result = await StudentAccount.deleteMany({ class: "DI1996A5" });
    return res.json({
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
export default getAllAccount;
