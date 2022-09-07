import mongoose from "mongoose";
const { Schema } = mongoose;

const evaluateCompany = new Schema({
  studentAccount: {
    type: Schema.Types.ObjectId,
    ref: "StudentAccount",
  },
  disPoints: Number,
  techPoint: Number,
  resultPoint: Number,
  message: String,
});

export default mongoose.model("EvaluateCompany", evaluateCompany);
