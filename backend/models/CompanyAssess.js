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
        type: Array,
    },
    message: {
        type: String,
        default: "No Message",
    },
});

export default mongoose.model("companyAssess", companyAssessSchema);
