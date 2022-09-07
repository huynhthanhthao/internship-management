import mongoose from "mongoose";
const { Schema } = mongoose;

const CompanyAccessSchema = new Schema({
  studentAccount: {
    type: Schema.Types.Mixed,
  },
  disPoints: Number,
  techPoint: Number,
  resultPoint: Number,
  message: String,
});

export default mongoose.model("CompanyAccess", CompanyAccessSchema);
