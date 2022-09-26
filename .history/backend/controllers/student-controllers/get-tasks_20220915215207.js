import Task from "../../models/Task.js";
import { ObjectId } from "mongodb";

const getTasks = async function (req, res, next) {
  const { studentId } = req.params;

  try {
    const tasks = await Task.findOne({ studentId: ObjectId(studentId) });

    return res.status(201).json({
      status: "success",
      tasks,
    });
  } catch (error) {
    console.log(error);
  }
};

export default getTasks;
