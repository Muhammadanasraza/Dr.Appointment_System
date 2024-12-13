import mongoose from 'mongoose';

const { Schema } = mongoose;

const appoinmentSchema = new Schema({

    user: { type: mongoose.Types.ObjectId, ref: "Users" },
    request: { type: mongoose.Types.ObjectId, ref: "Requests" },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "accepted", "cancelled", "visited", " reviewed", "Missed"],
    },
    date: Date

}, {
    timestamps: true
});



export const AppointmentModal = mongoose.models.Appointments || mongoose.model("Appointments", appoinmentSchema);