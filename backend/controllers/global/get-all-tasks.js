import Task from "../../models/Task.js";

const getTasks = async function (req, res, next) {
    const { studentId } = req.query;
    try {
        const result = await Task.find({ studentId });

        return res.status(201).json({
            status: true,
            message: "Lấy tất cả công việc thành công!",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default getTasks;
