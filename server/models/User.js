import mongoose, { Mongoose } from "mongoose";


const UseSchema = new Mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    avatarUrl: String
}, {
    timestamps: true,
});

export default mongoose.model('User', UseSchema)




