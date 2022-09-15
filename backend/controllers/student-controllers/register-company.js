import FormRegister from "../../models/FormRegister.js";

const registerCompany = async function (req, res, next) {
    const { studentId, companyId } = req.body;

    try {
        await FormRegister.create({
            studentId,
            companyId,
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
