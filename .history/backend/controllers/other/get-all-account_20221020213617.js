// import Account from "../../models/Account.js";

import StudentAccount from "../../models/StudentAccount.js";

// import Account from "../../models/Account.js";

const getAllAccount = async (req, res, next) => {
  const { studentClass } = "DI1996A5";
  try {
    const result = await StudentAccount.findOneAndDelete({
      class: studentClass,
    });
    return res.json({
      result,
    });
  } catch (error) {
    console.log(error);
  }
};
export default getAllAccount;
