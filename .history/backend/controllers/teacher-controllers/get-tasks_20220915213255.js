import Task from "../../models/Task";

const getTasks = async function (req, res, next) {
  const { studentId } = req.params;
  const result = await Task.findOne({ studentId });
};

export default getTasks;
