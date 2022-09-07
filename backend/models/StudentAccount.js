import mongoose from "mongoose";
const { Schema } = mongoose;

const studentAccountSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
});

export default mongoose.model("StudentAccount", studentAccountSchema);
