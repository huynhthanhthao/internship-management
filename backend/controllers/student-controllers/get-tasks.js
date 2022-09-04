import Task from "../../models/Task.js";

const getTask = async function (req, res, next) {
  const { studentID } = req.params;

  try {
    const tasks = await Task.find({ studentAccount: studentID });

    return res.status(201).json({
      status: "success",
      tasks,
    });
  } catch (error) {}
};

export default getTask;
