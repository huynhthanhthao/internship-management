import TeacherAccess from "../../models/TeacherAccess.js";
const postPoints = async (req, res, next) => {
  const { studentId, points } = req.body;
  try {
    const result = await TeacherAccess.findOneAndUpdate(
      { studentId: ObjectId(studentId) },
      { points },
      { new: true }
    );
    return res.json(result);
  } catch (error) {}
};
export default postPoints;
