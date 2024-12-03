import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/DatePikker";
import { getSingleRequest } from "@/actions/requests";
import Image from "next/image";

export default async function DoctorDetailPage({ params }) {
  const request = await getSingleRequest(params.id);
  const { user, ...doctorInfo } = request;

  if (!doctorInfo) {
    return <div>Doctor not found</div>;
  }

  return (
    <div className="bg-white border rounded-lg mx-auto my-5 shadow-lg max-w-3xl w-full p-8">
      <div className="flex items-center">
        <Image
          width={100}
          height={100}
          src={user.picture || "/placeholder.svg?height=100&width=100"}
          alt="Doctor's Profile Picture"
          className="w-32 h-32 rounded-full border-4 border-red-600 mr-6"
        />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{user.firstName || 'Doctor Name'}</h1>
          <p className="text-blue-500 text-lg">{doctorInfo.specialization || 'Specialization'}</p>
          <p className="text-gray-600 mt-2">{doctorInfo.hospital}</p>
        </div>
      </div>

      <div className="mt-6">
        <hr className="pb-4"/>
        <h2 className="text-1xl font-semibold text-gray-800">Appointment Details</h2>
        <div className="mb-4">
          <p className="text-gray-600">Appointment Time: {doctorInfo.appointmentTime || 'Not specified'}</p>
          <p className="text-gray-600">Fees: {doctorInfo.fees}</p>
          <p className="text-gray-600">Gender: {doctorInfo.gender}</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-1xl font-semibold text-gray-800">Doctor Information</h2>
        <p className="mt-2 text-gray-600">
          <strong>Degree:</strong> {doctorInfo.degree}
        </p>
        <p className="text-gray-600">
          <strong>Experience:</strong> {doctorInfo.experience}
        </p>
        <p className="text-gray-600">
          <strong>Bio:</strong> {doctorInfo.bio}
        </p>
      </div>

      <div className="mt-6">
        <h2 className="text-1xl font-semibold text-gray-800">Contact Details</h2>
        <p className="mt-2 text-gray-600">
          <strong>Email:</strong> {user.email || 'Not provided'}
        </p>
        <p className="text-gray-600">
          <strong>Phone:</strong> {doctorInfo.number}
        </p>
        <p className="text-gray-600">
          <strong>Office Address:</strong> {doctorInfo.address}
        </p>
      </div>

      <DatePicker />

      <div className="mt-8">
        <Button className="transition">
          Book an Appointment
        </Button>
      </div>
    </div>
  );
}

