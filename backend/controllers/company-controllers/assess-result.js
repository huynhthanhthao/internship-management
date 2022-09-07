import CompanyAccess from "../../models/CompanyAccess.js";
const assessResult = async function (req, res, next) {
    const { studentId } = req.params;
    const { disPoint, techPoint, resultPoint, message } = req.body;

    try {
        const result = await CompanyAccess.findOneAndUpdate(
            { "studentAccount._id": "63138ba7a82803fb443dfb25" },
            {
                disPoint,
                techPoint,
                resultPoint,
                message,
            },
            { new: true }
        );

        console.log(
            await CompanyAccess.findOneAndUpdate(
                { "studentAccount._id": studentId },
                {
                    disPoint,
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
            result,
        });
    } catch (error) {
        next(error);
    }
};
export default assessResult;
