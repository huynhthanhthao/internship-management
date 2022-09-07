import CompanyAccess from "../../models/CompanyAccess.js";

const assessResult = async function (req, res, next) {
  const { studentAccount } = req.value.params;
  const bodyData = req.value.body;

  try {
    const findStudent = await CompanyAccess.findOneAndUpdate(
      { studentAccount: studentAccount },
      {
        disPoints: bodyData.disPoints,
        techPoint: bodyData.techPoint,
        resultPoint: bodyData.resultPoint,
        message: bodyData.message,
      }
    );

    return findStudent
      ? res.status(201).json({
          status: "success",
          message: "Assess Completed!",
        })
      : res.status(201).json({
          status: "success",
          message: "Don't Find Student to Assess",
        });
  } catch (error) {
    next(error);
  }
};
export default assessResult;
