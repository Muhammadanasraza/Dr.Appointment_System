import { doctors } from "@/lib/doctor";


export default function DoctorDetailPage() {


    return (

        <div className="max-w-4xl mx-auto p-6 my-12 bg-white shadow-lg border text border-b-black rounded-lg">
            <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
                {/* Doctor's Image */}
        
                <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
                    <img
                        src={"https://img.freepik.com/free-photo/portrait-confident-middle-aged-male-doctor_53876-85464.jpg"}
                        alt="Doctor Profile Picture"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
                {/* Doctor's Details */}
                <div className="w-full lg:w-2/3">
                    {/* Doctor's Name and Specialty */}
                    <div className="mb-4">
                        <h1 className="text-3xl font-bold text-gray-800">Dr. John Smith</h1>
                        <p className="text-xl text-gray-500">Cardiologist</p>
                    </div>
                    {/* Qualifications & Experience */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-700">Qualifications</h2>
                        <p className="text-gray-600">
                            MBBS, MD - Cardiology, Fellowship in Interventional Cardiology
                        </p>
                    </div>
                    {/* Clinic Location */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-700">Clinic Location</h2>
                        <p className="text-gray-600">
                            City Hospital, Downtown, 123 Medical Street
                        </p>
                    </div>
                    {/* Appointment Details */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-700">
                            Appointment Timing
                        </h2>
                        <p className="text-gray-600">Monday - Friday: 9:00 AM - 4:00 PM</p>
                        <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                    </div>
                    {/* Consultation Fees */}
                    <div className="mb-4">
                        <h2 className="text-xl font-semibold text-gray-700">
                            Consultation Fees
                        </h2>
                        <p className="text-gray-600">$100 per appointment</p>
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
                        <a
                            href="#"
                            className="inline-block px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-md shadow hover:bg-blue-700 transition duration-200"
                        >
                            Book Appointment
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}