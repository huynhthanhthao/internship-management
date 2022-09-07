import Task from "../../models/Task.js";
import { ObjectId } from "mongodb";
const createTask = async function (req, res, next) {
  const { studentId, title } = req.body;

  try {
    const result = await Task.create({
      studentId: ObjectId(studentId),
      title,
    });

    return res.json({
      status: "success",
      message: "Create task successfully!",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export default createTask;
