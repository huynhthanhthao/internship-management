import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  studentId: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
  status: { type: Boolean, default: false },
  message: { type: String, default: "No Message" },
});

export default mongoose.model("Task", taskSchema);
