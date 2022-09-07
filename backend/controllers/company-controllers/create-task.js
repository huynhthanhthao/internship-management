import Task from "../../models/Task.js";

const createTask = async function (req, res, next) {
    const { studentId, title } = req.body;

    try {
        const result = await Task.create({ studentId, title });
        console.log(result);
        return res.json({
            status: true,
            message: "Create task successfully!",
            result,
        });
    } catch (error) {
        next(error);
    }
};

export default createTask;
