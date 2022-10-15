import Account from "../../models/Account.js";

const getInforTeacher = async function (req, res, next) {
  const { username } = req.params;
  try {
    const result = await Account.findOne({ username });

    return res.status(201).json({
      status: "success",
      message: "Get infor teacher successfully!",

      result,
    });
  } catch (error) {
    next(error);
  }
};

export default getInforTeacher;
