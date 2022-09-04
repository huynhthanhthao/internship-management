import createAccount from "./create-account.js";

const addTeacher = async function (req, res, next) {
  const dataBody = req.value.body;

  try {
    await createAccount(dataBody, "TEACHER");

    return res.status(201).json({
      status: "access",
      message: "Create New Account Teacher Complete.",
    });
  } catch (error) {
    next(error);
  }
};

export default addTeacher;
