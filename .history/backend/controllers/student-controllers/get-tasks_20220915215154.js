import Task from "../../models/Task.js";
import { ObjectId } from "mongoose";
const getTasks = async function (req, res, next) {
  const { studentId } = req.params;

  try {
    const tasks = await Task.findOne({ studentId });

    return res.status(201).json({
      status: "success",
      tasks,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getTasks;
