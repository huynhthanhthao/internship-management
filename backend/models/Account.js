import mongoose from "mongoose";
const { Schema } = mongoose;

const accountSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        min: 6,
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    urlAvatar: {
        type: String,
    },
    rule: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
});

export default mongoose.model("Account", accountSchema);
