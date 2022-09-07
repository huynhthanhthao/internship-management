import StudentAccount from "../../models/StudentAccount.js";
import CompanyAccess from "../../models/CompanyAccess.js";

const confirmStudent = async function (req, res, next) {
  const { studentID } = req.params;
  const bodyData = req.body;

  try {
    const studentAccount = await StudentAccount.create({
      account: studentID,
      company: bodyData.companyID,
    });

    await CompanyAccess.create({
      account: studentAccount._id,
    });

    return res.status(201).json({
      status: "success",
      message: "Confirm Student Completed",
    });
  } catch (error) {
    next(error);
  }
};

export default confirmStudent;
