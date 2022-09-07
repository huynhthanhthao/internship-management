import mongoose from "mongoose";
const { Schema } = mongoose;

const teacherAccessSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  formPoint: Number,
  followPoint: Number,
  reportPoint: Number,
  minusPoint: Number,
  message: String,
});

export default mongoose.model("TeacherAccess", teacherAccessSchema);
