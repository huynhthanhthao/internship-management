import CompanyAccess from "../../models/CompanyAccess.js";
import { ObjectId } from "mongodb";
const assessResult = async function (req, res, next) {
  const { studentId } = req.params;
  const { disPoint, techPoint, resultPoint, message } = req.body;

  try {
    const findStudent = await CompanyAccess.findOneAndUpdate(
      { "studentAccount._id": ObjectId(studentId) },
      {
        disPoint,
        techPoint,
        resultPoint,
        message,
      },
      { new: true }
    );

    return res.status(201).json({
      status: "success",
      message: "Assess Completed!",
      findStudent,
    });
  } catch (error) {
    next(error);
  }
};
export default assessResult;
