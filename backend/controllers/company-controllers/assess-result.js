import CompanyAccess from "../../models/CompanyAccess.js";

const assessResult = async function (req, res, next) {
    const { studentId } = req.params;
    const { disPoints, techPoint, resultPoint, message } = req.body;

    try {
        await CompanyAccess.findOneAndUpdate(
            { "studentAccount.username": "ST01" },
            {
                disPoints,
                techPoint,
                resultPoint,
                message,
            },
            { new: true }
        );

        console.log(
            await CompanyAccess.findOneAndUpdate(
                { "studentAccount._id": "63138ba7a82803fb443dfb25" },
                {
                    disPoints,
                    techPoint,
                    resultPoint,
                    message,
                },
                { new: true }
            )
        );

        return res.status(201).json({
            status: "success",
            message: "Assess Completed!",
            findStudent,
        });
    } catch (error) {
        next(error);
    }
};
export default assessResult;
