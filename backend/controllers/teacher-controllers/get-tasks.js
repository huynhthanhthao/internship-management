import Task from "../../models/Task.js";

const getTasks = async function (req, res, next) {
  const { studentId } = req.params;
  try {
    const result = await Task.findOne({ studentId });

    return res.status(201).json({
      status: "success",
      message: "Get tasks successfully!",
      result,
    });
  } catch (error) {
    next(error);
  }
};

export default getTasks;
