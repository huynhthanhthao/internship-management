import mongoose from "mongoose";
const { Schema } = mongoose;

const evaluateTeacher = new Schema({
    studentAccount: {
        type: Schema.Types.ObjectId,
        ref: "StudentAccount",
    },
    formPoint: Number,
    followPoint: Number,
    reportPoint: Number,
    minusPoint: Number,
    message: String,
});

export default mongoose.model("EvaluateTeacher", evaluateTeacher);
