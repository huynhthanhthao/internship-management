import studentAccount from "../../models/studentAccount.js";
import CompanyAccess from "../../models/CompanyAccess.js";

const confirmStudent = async function (req, res, next) {
    const { studentID, companyID } = req.body;

    try {
        const studentAccount = await Account.findOne({ _id: studentID });

        await CompanyAccess.create({});

        return res.status(201).json({
            status: "success",
            message: "Confirm Student Completed",
        });
    } catch (error) {
        next(error);
    }
};

export default confirmStudent;
