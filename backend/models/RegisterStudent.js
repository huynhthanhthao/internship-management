import mongoose from "mongoose";
const { Schema } = mongoose;

const registerStudentSchema = new Schema({
    companyAccount: {
        type: Schema.Types.ObjectId,
        ref: "CompanyAccount",
    },

    CV: {
        type: Schema.Types.ObjectId,
        ref: "CV",
    },
});

export default mongoose.model("RegisterStudent", registerStudentSchema);
