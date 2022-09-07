import Account from "../../models/Account.js";
import CompanyAccount from "../../models/CompanyAccount.js";

const addCompanyController = async (req, res) => {
    const { username, password, name } = req.body;

    // Check missing data
    if (!username || !password || !name) {
        return res
            .status(400)
            .json({ status: false, message: "Missing data!" });
    }

    try {
        let account = await Account.findOne({ username });

        // Check username is existed
        if (account) {
            return res
                .status(400)
                .json({ status: false, message: "Account already exists!" });
        }

        // All good
        account = await Account.create({ username, password });

        const companyAccount = await CompanyAccount.create({
            account,
            name,
        });

        return res.json({
            status: true,
            message: "Create account company successful!",
            companyAccount,
        });
    } catch (error) {
        console.log(error);
    }
};

export default addCompanyController;
