import RegisterStudent from "../../models/RegisterStudent.js";

const registerCompany = async function (req, res, next) {
  const { companyAccount } = req.params;
  const bodyData = req.body;

  try {
    const resultRegister = await RegisterStudent.create({
      companyAccount: companyAccount,
      CV: bodyData.CV,
    });

    return res.status(201).json({
      status: "access",
      message: "Register Completed!",
    });
  } catch (error) {
    next(error);
  }
};

export default registerCompany;
