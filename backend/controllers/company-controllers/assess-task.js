import Task from "../../models/Task.js";
import { ObjectId } from "mongodb";

const assessTask = async function (req, res, next) {
  const { status, message, studentId, taskId, title } = req.body;

  try {
    const resultAssess = await Task.findOneAndUpdate(
      {
        studentId: ObjectId(studentId),
        taskId,
      },
      {
        status,
        message,
        title,
      },
      { new: true }
    );

    return res.status(201).json({
      status: "success",
      message: "Assess Task Completed!",
      resultAssess,
    });
  } catch (error) {
    next(error);
  }
};

export default assessTask;
