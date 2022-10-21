import { ObjectId } from "mongodb";
import CompanyAssess from "../../models/CompanyAssess";
const getCompanyAssess = async (req, res, next) => {
  const { studentId, companyId } = req.body;
  try {
    const { points, message } = await CompanyAssess.findOne({
      studentId: ObjectId(studentId),
    });
  } catch (error) {}
};
