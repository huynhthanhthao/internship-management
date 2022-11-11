import Task from "../../models/Task.js";
const deleteTask = async function (req, res, next) {
  const { taskId } = req.body;

  if (taskId) {
    try {
      const result = await Task.findOneAndDelete({
        _id: taskId,
      });

      return res.json({
        status: true,
        message: "Xóa công việc thành công!",
        result,
      });
    } catch (error) {
      next(error);
    }
  } else
    return res.json({
      status: false,
      message: "Không xác định được ID công việc!",
    });
};

export default deleteTask;
