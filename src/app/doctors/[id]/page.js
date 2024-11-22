import { Button } from "@/components/ui/button";
import { doctors } from "@/lib/doctor";
import Link from "next/link";
import Image from "next/image";
import { DatePicker } from "@/components/DatePikker";

export default async function DoctorDetailPage({ params }) {

    const doctorInfo = doctors.find((doctor) => doctor.id == params.id);

    return (
        <div className="bg-white border rounded-lg mx-auto my-5 shadow-lg max-w-3xl w-full p-8">
          
            <div className="flex items-center">
                <Image
                    width={100}
                    height={100}
                    src={doctorInfo.image}
                    alt="Doctor's Profile Picture"
                    className="w-32 h-32 rounded-full border-4 border-red-600 mr-6"
                />
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">{doctorInfo.name} </h1>
                    <p className="text-blue-500 text-lg">{doctorInfo.category}</p>
                    <p className="text-gray-600 mt-2">{doctorInfo.hospital}</p>
                </div>
            </div>

            <div className="mt-6">
                <hr className="pb-4"/>
                <h2 className="text-1xl font-semibold text-gray-800">Appointment Details </h2>
                <div className="mb-4">

                    <p className="text-gray-600">{doctorInfo.appointmentTime}</p>
                    <p className="text-gray-600">{doctorInfo.fees}</p>
                    <p className="text-gray-600">{doctorInfo.gender}</p>
                    
                </div>
            </div>
            {/* Contact Section */}
            <div className="mt-6">
                <h2 className="text-1xl font-semibold text-gray-800">Contact Details</h2>
                <p className="mt-2 text-gray-600">
                    <strong>Email:</strong> {doctorInfo.email}
                </p>
                <p className="text-gray-600">
                    <strong>Phone:</strong>{doctorInfo.phone}
                </p>
                <p className="text-gray-600">
                    <strong>Office Address:</strong> {doctorInfo.address}
                </p>
            </div>
            <DatePicker/>

            {/* Appointment Button */}
            <div className="mt-8">
                <Button className="transition">
                    Book an Appointment
                </Button>
            </div>
        </div>


    )
}