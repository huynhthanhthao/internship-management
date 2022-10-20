import FormRegister from "../../models/FormRegister.js";

const registerCompany = async function (req, res, next) {
    const { studentId, companyId, gpa, languages, projects, message } =
        req.body;

    try {
        await FormRegister.create({
            studentId,
            companyId,
            gpa,
            languages,
            projects,
            message,
        });

        return res.status(201).json({
            status: true,
            message: "Đăng ký thành công!",
        });
    } catch (error) {
        next(error);
    }
};

export default registerCompany;
