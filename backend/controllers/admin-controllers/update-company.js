import CompanyAccount from "../../models/CompanyAccount.js";
import Account from "../../models/Account.js";
const updateCompany = async function (req, res, next) {
  const { companyID } = req.value.params;

  const bodyData = req.value.body;

  try {
    const resultUpdate = await CompanyAccount.findOneAndUpdate(
      { account: companyID },
      {
        address: bodyData.address,
        message: bodyData.message,
      }
    );
    if (resultUpdate) {
      await Account.findOneAndUpdate(
        { _id: companyID },
        {
          name: bodyData.name,
          email: bodyData.email,
          phoneNumber: bodyData.phoneNumber,
          urlAvatar: bodyData.urlAvatar,
        }
      );

      return res.status(201).json({
        status: "success",
        message: "Update Information Company Completed!",
      });
    } else
      return res.status(201).json({
        status: "success",
        message: "Don't Find Company ID to Update",
      });
  } catch (error) {
    next(error);
  }
};
export default updateCompany;
