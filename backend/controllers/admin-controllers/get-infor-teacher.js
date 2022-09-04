import Account from "../../models/Account.js";

const getInforTeacher = async function (req, res, next) {
  const teacherUsername = req.value.params;
  try {
    const resultGetInfor = await Account.find(teacherUsername);

    const resultRespond = {
      username: resultGetInfor[0].username,
      name: resultGetInfor[0].name,
      email: resultGetInfor[0].email,
      phone: resultGetInfor[0].phoneNumber,
    };

    return res.status(201).json({
      status: "success",
      infor: resultRespond,
    });
  } catch (error) {
    next(error);
  }
};

export default getInforTeacher;
