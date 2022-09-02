import mongoose from "mongoose";
const { Schema } = mongoose;

const CVSchema = new Schema({
    account: {
        type: Schema.Types.ObjectId,
        ref: "StudentAccount",
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
    message: String,
});

export default mongoose.model("CVSchema", CVSchema);
