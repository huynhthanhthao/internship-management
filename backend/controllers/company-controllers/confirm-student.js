import StudentAccount from "../../models/StudentAccount.js";
import CompanyAccess from "../../models/CompanyAccess.js";

const confirmStudent = async function (req, res, next) {
  const { studentID } = req.params;
  const bodyData = req.body;

  try {
    await StudentAccount.findOneAndUpdate(
      { account: studentID },
      { company: bodyData.companyID }
    );

    await CompanyAccess.create({
      account: studentID,
    });

    return res.status(201).json({
      status: "access",
      message: "Confirm Student",
    });
  } catch (error) {
    next(error);
  }
};

export default confirmStudent;
