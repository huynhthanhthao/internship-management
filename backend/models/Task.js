import mongoose from "mongoose";
const { Schema } = mongoose;

const taskSchema = new Schema({
    title: String,
    studentAccount: {
        type: Schema.Types.ObjectId,
        ref: "StudentAccount",
    },
    status: {
        type: Boolean,
    },
    assess: {
        type: String,
    },
});

export default mongoose.model("Task", taskSchema);
