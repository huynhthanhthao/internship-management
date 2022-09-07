import Task from "../../models/Task.js";

const getTask = async function (req, res, next) {
  const { studentAccount } = req.params;

  try {
    const tasks = await Task.find({ studentAccount: studentAccount });

    return tasks
      ? res.status(201).json({
          status: "success",
          tasks,
        })
      : res.status(201).json({
          status: "success",
          message: "Don't Find Student ID to Get Task",
        });
  } catch (error) {}
};

export default getTask;
