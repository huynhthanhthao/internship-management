import CompanyAccount from "../../models/CompanyAccount.js";
import Account from "../../models/Account.js";

const getCompanies = async function (req, res, next) {
    try {
        const companies = await CompanyAccount.find({});
        const result = [];

        for (let company of companies) {
            let detail = await Account.findOne({ _id: company.companyId });

            detail = {
                detail,
                company,
            };

            result.push(detail);
        }

        return res.status(201).json({
            success: "OK",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default getCompanies;
