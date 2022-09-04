import createAccount from "./create-account.js";

const addStudent = async function (req, res, next) {
  const dataBody = req.value.body;

  try {
    await createAccount(dataBody, "STUDENT");

    return res.status(201).json({
      status: "access",
      message: "Create New Account Student Complete.",
    });
  } catch (error) {
    next(error);
  }
};

export default addStudent;
