import CompanyAccess from "../../models/CompanyAccess.js";
const assessResult = async function (req, res, next) {
  const { studentID } = req.value.params;
  const bodyData = req.value.body;

  try {
    const findStudent = await CompanyAccess.findOneAndUpdate(
      { accountStudent: studentID },
      {
        disPoints: bodyData.disPoints,
        techPoint: bodyData.techPoint,
        resultPoint: bodyData.resultPoint,
        message: bodyData.message,
      }
    );

    return res.status(201).json({
      status: "success",
      message: "Assess Completed!",
    });
  } catch (error) {
    next(error);
  }
};
export default assessResult;
