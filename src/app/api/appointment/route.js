import connectDb from "@/lib/connectDb";
import { AppointmentModal } from "@/lib/models/AppoinmentModal";





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
    console.log("query", query)
    const doctor = req?.nextUrl?.searchParams?.get("doctor");
    console.log("doctors", doctor)
    const user = req?.nextUrl?.searchParams?.get("user");
    console.log("user", user)
    if (doctor) query.request = doctor;
    if (user) query.user = user;

    const appointments = await AppointmentModal.find(query)
        .populate("user")
        .populate("request");
    console.log("appointments", appointments)
    return Response.json({
        error: false,
        msg: "Appointment fetched Successfully",
        appointments,

    }, { status: 200 })

}

export async function PUT(req) {

}

export async function DELETE(req) {

}