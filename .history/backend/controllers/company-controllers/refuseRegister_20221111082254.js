import FormRegister from "../../models/FormRegister.js";

const refuseRegister = async function (req, res, next) {
    try {
        const { studentId, companyId } = req.body;

        if (studentId && companyId) {
            const result = await FormRegister.find({
                studentId,
                companyId,
            }).remove();

            res.json({
                status: true,
                message: "Từ chối ứng viên thành công!",
                result,
            });
        } else {
            res.json({
                status: false,
                message: "Không xác định được studentId hoặc companyId!",
            });
        }
    } catch (error) {
        next();
    }
};

export default refuseRegister;
