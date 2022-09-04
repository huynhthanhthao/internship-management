import CompanyAccess from "../../models/CompanyAccess.js";

const getAllAssess = async function (req, res, next) {
  try {
    const resultAssess = await CompanyAccess.find({});
    return res.status(201).json({
      status: "access",
      resultAssess,
    });
  } catch (error) {
    next(error);
  }
};

export default getAllAssess;
