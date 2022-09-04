import Task from "../../models/Task.js";

const assessTask = async function (req, res, next) {
  const { studentID, title } = req.value.params;
  const bodyData = req.value.body;

  try {
    const resultAssess = await Task.findOneAndUpdate(
      {
        studentAccount: studentID,
        title: title,
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
          message: "Don't Find Account Student or Title to Assess",
        });
  } catch (error) {
    next(error);
  }
};

export default assessTask;
