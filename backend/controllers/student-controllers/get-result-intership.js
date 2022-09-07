import CompanyAccess from "../../models/CompanyAccess.js";

const getResultInternShip = async function (req, res, next) {
  const { studentAccount } = req.value.params;

  try {
    const resultAssess = CompanyAccess.find({ studentAccount: studentAccount });

    return resultAssess
      ? res.status(201).json({
          status: "success",
          result: resultAssess,
        })
      : res.status(201).json({
          status: "success",
          message: "Don't Find Student ID to Get Result",
        });
  } catch (error) {
    next(error);
  }
};

export default getResultInternShip;
