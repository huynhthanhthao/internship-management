import Task from "../../models/Task.js";
import { ObjectId } from "mongodb";

const assessTask = async function (req, res, next) {
    const { status, message, studentId, taskId, title } = req.body;

    try {
        const resultAssess = await Task.findOneAndUpdate(
            {
                "studentAccount._id": ObjectId(studentId),
                taskId,
            },
            {
                status,
                message,
                title,
            }
        );

        return resultAssess
            ? res.status(201).json({
                  status: "success",
                  message: "Assess Task Completed!",
              })
            : res.status(201).json({
                  status: "success",
                  message: "Don't Find Student ID or Task ID to Assess",
              });
    } catch (error) {
        next(error);
    }
};

export default assessTask;
