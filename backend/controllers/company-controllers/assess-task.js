import Task from "../../models/Task.js";

const assessTask = async function (req, res, next) {
    const { status, message, taskId } = req.body;

    try {
        const resultAssess = await Task.findOneAndUpdate(
            {
                _id: taskId,
            },
            {
                status,
                message,
            },
            { new: true }
        );

        return res.status(201).json({
            status: true,
            message: "Đánh giá công việc thành công!",
            resultAssess,
        });
    } catch (error) {
        next(error);
    }
};

export default assessTask;
