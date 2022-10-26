import CompanyAssess from "../../models/CompanyAssess.js";

const getCompanyAssess = async (req, res, next) => {
  try {
    const result = CompanyAssess.find({});
    return res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
};
export default getCompanyAssess;
