import Task from "../../models/Task.js";

const getTasks = async function (req, res, next) {
    const { studentId } = req.params;

    try {
        const tasks = await Task.find({ studentId });

        return tasks
            ? res.status(201).json({
                  status: "success",
                  tasks,
              })
            : res.status(201).json({
                  status: "success",
                  message: "Don't Find Student ID to Get Task",
              });
    } catch (error) {
        console.log(error);
    }
};

export default getTasks;
