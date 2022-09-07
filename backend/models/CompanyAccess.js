import mongoose from "mongoose";
const { Schema } = mongoose;

const companyAccessSchema = new Schema({
    student: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    disPoint: {
        type: Number,
        default: 0,
    },
    techPoint: {
        type: Number,
        default: 0,
    },
    resultPoint: {
        type: Number,
        default: 0,
    },
    message: {
        type: String,
        default: "No Message",
    },
});

export default mongoose.model("companyAccess", companyAccessSchema);
