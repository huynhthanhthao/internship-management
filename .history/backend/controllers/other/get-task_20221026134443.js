import Task from "../../models/Task";
import { ObjectId } from "mongodb";
const getTask = async (req, res, next) => {
  const { studentId } = req.body;
  try {
    const result = await Task.find({
      studentId: ObjectId(studentId),
    });
    return res.json({
      result,
    });
  } catch (error) {
    next(error);
  }
};
