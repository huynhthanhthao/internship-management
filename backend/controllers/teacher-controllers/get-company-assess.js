import CompanyAssess from "../../models/CompanyAssess.js";
const getCompanyAssess = async function (req, res, next) {
    try {
        const { studentId } = req.params;

        const result = await CompanyAssess.findOne({ studentId: studentId });

        return res.json({
            status: true,
            message: "Get company assess successfully!",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default getCompanyAssess;
