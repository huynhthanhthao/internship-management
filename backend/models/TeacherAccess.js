import mongoose from "mongoose";
const { Schema } = mongoose;

const teacherAccessSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    points: {
        type: [Number],
    },
});

export default mongoose.model("TeacherAccess", teacherAccessSchema);
