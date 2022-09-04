import CompanyAccess from "../../models/CompanyAccess.js";

const getResultInternShip = async function (req, res, next) {
  const { studentID } = req.value.params;

  try {
    const resultAssess = CompanyAccess.find({ studentAccount: studentID });

    return res.status(201).json({
      status: "success",
      result: resultAssess,
    });
  } catch (error) {
    next(error);
  }
};

export default getResultInternShip;
