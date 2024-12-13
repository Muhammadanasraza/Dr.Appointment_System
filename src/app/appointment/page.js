import { columns } from "@/components/AppointmentTable/columns";
import { AppoinrtmentTable } from "@/components/AppointmentTable/data-table";
import { appointments } from "@/lib/doctor";
import { auth } from "../../../auth";
import { getAppointment } from "@/actions/appointment";

export default async function Appointment() {
    const session = await auth();
    // console.log("sessionmain",session)
    const appointments  = await getAppointment("user", session?.user?.id)
    console.log("Appointment", appointments)

    return (
        <div className="text-center my-5 mx-auto">
            <h1 className="text-3xl mb-6 font-bold ">
                My Appointment
            </h1>
            {/* <AppoinrtmentTable  columns={columns} data={appointments}/> */}

        </div>
    )
}