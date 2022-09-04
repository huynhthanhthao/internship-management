import Account from "../../models/Account.js";

const searchCompany = async function (req, res, next) {
  const { searchData } = req.params;
  const regex = new RegExp(searchData, "i");

  try {
    const resultSearch = await Account.find({
      $or: [{ username: regex }, { name: regex }],
      rule: "COMPANY",
    });

    return res.status(201).json({
      status: "success",
      result: resultSearch,
    });
  } catch (error) {
    next(error);
  }
};

export default searchCompany;
