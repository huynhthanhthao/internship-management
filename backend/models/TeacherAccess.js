import mongoose from "mongoose";
const { Schema } = mongoose;

const teacherAccessSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    points: {
        type: Array,
    },
    message: String,
});

export default mongoose.model("TeacherAccess", teacherAccessSchema);
