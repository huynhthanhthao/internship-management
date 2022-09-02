import mongoose from "mongoose";
const { Schema } = mongoose;

const studentAccountSchema = new Schema({
    account: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: "CompanyAccount",
    },
});

export default mongoose.model("StudentAccount", studentAccountSchema);
