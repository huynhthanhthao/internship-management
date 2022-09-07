import mongoose from "mongoose";

const { Schema } = mongoose;

const companyAccountSchema = new Schema({
    companyId: {
        type: Schema.Types.ObjectId,
        ref: "Account",
    },
    address: {
        type: String,
    },
    message: {
        type: String,
    },
});

export default mongoose.model("CompanyAccount", companyAccountSchema);
