import CompanyAccount from "../../models/CompanyAccount.js";
import Account from "../../models/Account.js";
import { ObjectId } from "mongodb";

const updateCompany = async function (req, res, next) {
    const { companyId, address, message, name, email, phoneNumber, urlAvatar } =
        req.body;

    try {
        const resultUpdate = await CompanyAccount.findOneAndUpdate(
            { companyId: ObjectId(companyId) },
            {
                address,
                message,
            }
        );
        if (resultUpdate) {
            await Account.findOneAndUpdate(
                { _id: companyId },
                {
                    name,
                    email,
                    phoneNumber,
                    urlAvatar,
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
