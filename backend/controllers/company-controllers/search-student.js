import CompanyAccess from "../../models/CompanyAccess.js";
import Account from "../../models/Account.js";
const searchStudent = async function (req, res, next) {
  const { searchData } = req.params;
  const regex = new RegExp(searchData, "i");

  try {
    const resultAccounts = await Account.find({
      $or: [{ username: regex }, { name: regex }],
      rule: "STUDENT",
    });

    const resultSearch = [];

    for (resultAccount in resultAccounts) {
      const tempResult = await CompanyAccess.find({
        studentAccount: resultAccount._id,
      });
      if (tempResult) resultSearch.push(tempResult._id);
    }

    return res.status(201).json({
      status: "success",
      result: resultSearch,
    });
  } catch (error) {
    next(error);
  }
};

export default searchStudent;
