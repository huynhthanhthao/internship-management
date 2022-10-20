import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: String,
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    time: { type: Date },
    status: { type: Boolean, default: false },
    message: { type: String },
});

export default mongoose.model("Task", taskSchema);
