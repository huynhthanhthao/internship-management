import Account from "../../models/Account.js";

const getInforTeacher = async function (req, res, next) {
  const teacherUsername = req.params;
  try {
    const resultGetInfor = await Account.findOne(teacherUsername);

    return resultGetInfor
      ? res.status(201).json({
          status: "success",
          infor: resultRespond,
        })
      : res.status(201).json({
          status: "success",
          message: "Don't Find Teacher",
        });
  } catch (error) {
    next(error);
  }
};

export default getInforTeacher;
