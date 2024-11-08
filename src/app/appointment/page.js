import { columns } from "@/components/AppointmentTable/columns";
import { AppoinrtmentTable } from "@/components/AppointmentTable/data-table";
import { appointments } from "@/lib/doctor";

export default function Appoinrtment() {

    return (
        <div className="text-center my-5 mx-auto">
            <h1 className="text-3xl mb-6 font-bold ">
                My Appointment
            </h1>
            <AppoinrtmentTable  columns={columns} data={appointments}/>

        </div>
    )
}