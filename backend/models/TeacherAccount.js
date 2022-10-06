import mongoose from "mongoose";

const { Schema } = mongoose;

const teacherAccountSchema = new Schema({
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    class: {
        type: String,
    },
});

export default mongoose.model("TeacherAccount", teacherAccountSchema);
