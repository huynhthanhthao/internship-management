import mongoose from "mongoose";
const { Schema } = mongoose;

const companyAssessSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    points: {
        type: [Number],
    },
    message: {
        type: String,
        default: "No Message",
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model("companyAssess", companyAssessSchema);
