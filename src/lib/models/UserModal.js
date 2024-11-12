import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    picture: String,
    roll: { type: String, default: "user", enum: ["user", "doctor", "admin"] },
    doctorInf: {
        fees: Number,
        hospital: String,
        gender: String,
        spacialization: String,
        time: String,
        bio: String,
    }
});



export const UserModal = mongoose.models.User || mongoose.model("user", userSchema);