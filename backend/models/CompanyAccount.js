import mongoose from "mongoose";

const { Schema } = mongoose;

const companyAccountSchema = new Schema({
    account: {
        type: Schema.Types.Mixed,
    },
    address: {
        type: String,
    },
    message: {
        type: String,
    },
});

export default mongoose.model("CompanyAccount", companyAccountSchema);
