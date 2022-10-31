import TeacherAccess from "../../models/TeacherAccess.js";

const getTeacherAssess = async (req, res, next) => {
  try {
    const result = await TeacherAccess.find({});
    return res.json({ result });
  } catch (error) {
    next(error);
  }
};

export default getTeacherAssess;
