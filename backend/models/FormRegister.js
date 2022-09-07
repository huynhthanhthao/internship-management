import mongoose from "mongoose";
const { Schema } = mongoose;

const formRegisterSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  gpa: {
    type: Number,
  },
  language: {
    type: [String],
  },
  projects: {
    type: [String],
  },
  message: {
    type: String,
  },
});

export default mongoose.model("FromRegister", formRegisterSchema);
