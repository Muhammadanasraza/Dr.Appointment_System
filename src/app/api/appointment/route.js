import connectDb from "@/lib/connectDb";
import { AppointmentModal } from "@/lib/models/AppoinmentModal";

import { UserModal } from "@/lib/models/UserModal"




export async function POST(req) {

    await connectDb()
    try {
        const obj = await req.json()

        let newAppointment = await new AppointmentModal({ ...obj });

        newAppointment = await newAppointment.save()

        return Response.json({
            error: false,
            msg: "Your Appointment Is Booked ,",
            appointment: newAppointment

        }, { status: 201 })

    } catch (e) {
        return Response.json({
            error: true,
            msg: "Something went Wrong",

        }, { status: 400 })
    }
}



export async function GET(req) {

    await connectDb()

    const query = {};
    const doctor = req?.nextUrl?.searchParams?.get("doctor");
    const user = req?.nextUrl?.searchParams?.get("user");
    if (doctor) query.request = doctor;
    if (user) query.user = user;
    const appointment = await AppointmentModal.find(query).populate("user").populate("request");

    return Response.json({
        error: false,
        msg: "appointment fetched Successfully",
        appointment: appointment
    }, { status: 200 })

}

export async function PUT(req) {

}

export async function DELETE(req) {

}