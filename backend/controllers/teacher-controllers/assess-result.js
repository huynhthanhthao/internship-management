import TeacherAssess from "../../models/TeacherAccess.js";
const assessResult = async function (req, res, next) {
    try {
        const { studentId, formPoint, followPoint, reportPoint, minusPoint } =
            req.body;

        const result = await TeacherAssess.findOneAndUpdate(
            { studentId },
            { formPoint, followPoint, reportPoint, minusPoint },
            { new: true, upsert: true }
        );
        return res.json({
            status: true,
            message: "Assess Successfully!",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default assessResult;
