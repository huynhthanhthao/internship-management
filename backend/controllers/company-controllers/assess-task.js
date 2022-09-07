import Task from "../../models/Task.js";

const assessTask = async function (req, res, next) {
  const { studentAccount, taskID } = req.value.params;
  //title => TaskID
  const bodyData = req.value.body;

  try {
    const resultAssess = await Task.findOneAndUpdate(
      {
        studentAccount: studentAccount,
        taskID: taskID,
      },
      {
        status: bodyData.status,
        assess: bodyData.assess,
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
