import { Button } from "@/components/ui/button";
import { doctors } from "@/lib/doctor";
import Link from "next/link";


export default function DoctorDetailPage({ params }) {

    const doctorInfo = doctors.find((doctor) => doctor.id == params.id);

    return (

        <div className="max-w-4xl mx-auto p-6 my-12 bg-white shadow-lg border text border-b-black rounded-lg">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
                {/* Doctor's Image */}

                <div className="w-full  lg:w-1/3 mb-6 lg:mb-0">
                    <img
                        src={doctorInfo.image}
                        alt="Doctor Profile Picture"
                        className="w-full h-fit shadow-md"
                    />
                </div>
                {/* Doctor's Details */}
                <div className="w-full lg:w-2/3">
                    {/* Doctor's Name and Specialty */}
                    <div className="mb-4">
                        <h1 className="text-3xl font-bold text-gray-800">{doctorInfo.name} </h1>
                        <p className="text-xl text-gray-500">{doctorInfo.category}</p>
                    </div>

                    {/* Clinic Location */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-700">Clinic Location</h2>
                        <p className="text-gray-600">
                            {doctorInfo.hospital}
                        </p>
                    </div>
                    {/* Appointment Details */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-700">
                            Appointment Timing
                        </h2>
                        <p className="text-gray-600">{doctorInfo.appointmentTime}</p>
                    </div>
                    {/* Consultation Fees */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-700">
                            Consultation Fees
                        </h2>
                        <p className="text-gray-600">{doctorInfo.fees}</p>
                    </div>
                    {/* Contact Information */}
                    <div className="mb-6">
                        <h2 className="text-xl font-semibold text-gray-700">
                            Contact Information
                        </h2>
                        <p className="text-gray-600">Phone: +1 (234) 567-8901</p>
                        <p className="text-gray-600">Email: john.smith@cityhospital.com</p>
                    </div>
                    {/* Book Appointment Button */}
                    <div>
                        <Link href={"/"}>
                            <Button
                                className=" "
                            >
                                Book Appointment
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    )
}