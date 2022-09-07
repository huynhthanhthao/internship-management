import mongoose from "mongoose";
const { Schema } = mongoose;

const studentAccountSchema = new Schema({
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  companyId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
});

export default mongoose.model("StudentAccount", studentAccountSchema);
