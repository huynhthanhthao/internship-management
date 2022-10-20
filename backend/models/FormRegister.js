import mongoose from "mongoose";
const { Schema } = mongoose;

const formRegisterSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    gpa: {
        type: Number,
        default: 0,
    },
    languages: {
        type: String,
        default: "No Language",
    },
    projects: {
        type: String,
        default: "No Project",
    },
    message: {
        type: String,
        default: "No Message",
    },
});

export default mongoose.model("FormRegister", formRegisterSchema);
