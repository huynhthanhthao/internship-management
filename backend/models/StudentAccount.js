import mongoose from "mongoose";
const { Schema } = mongoose;

const studentAccountSchema = new Schema({
  account: {
    type: Schema.Types.Mixed,
  },
  company: {
    type: Schema.Types.Mixed,
  },
});

export default mongoose.model("StudentAccount", studentAccountSchema);
