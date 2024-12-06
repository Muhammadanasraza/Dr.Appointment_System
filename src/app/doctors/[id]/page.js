import { Button } from "@/components/ui/button";
import { getSingleRequest } from "@/actions/requests";
import Image from "next/image";
import { User, Briefcase, MapPin, Clock, DollarSign, GraduationCap, Calendar, Mail, Phone, Building } from 'lucide-react';
import { DatePicker } from "@/components/DatePikker";
import { auth } from "../../../../auth";
import Link from "next/link"

export default async function DoctorDetailPage({ params }) {
  const session = await auth()
  const request = await getSingleRequest(params.id);
  const { user, ...doctorInfo } = request?.requests || {};

  if (!doctorInfo) {
    return <div className="text-center py-10">Doctor not found</div>;
  }

  return (
    <div className="bg-white border rounded-lg mx-auto my-8 shadow-lg max-w-4xl w-full p-8">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <Image
          width={128}
          height={128}
          src={user?.picture || '/placeholder.svg'}
          alt={`${user?.firstName}'s Profile Picture`}
          className="w-32 h-32 rounded-full border-4 border-primary mb-4 md:mb-0 md:mr-6"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-800">{user?.firstName} {user?.lastName}</h1>
          <p className="text-primary text-lg">{doctorInfo?.specialization}</p>
          <p className="text-gray-600 mt-2 flex items-center justify-center md:justify-start">
            <MapPin className="w-4 h-4 mr-2" />
            {doctorInfo?.hospital}
          </p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            Appointment Details
          </h2>
          <div className="space-y-2">
            <p className="text-gray-600 flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              <strong>Time:</strong> {doctorInfo?.appointmentTime || 'Not specified'}
            </p>
            <p className="text-gray-600 flex items-center">
              <DollarSign className="w-4 h-4 mr-2" />
              <strong>Fees:</strong> {doctorInfo?.fees}
            </p>
            <p className="text-gray-600 flex items-center">
              <User className="w-4 h-4 mr-2" />
              <strong>Gender:</strong> {doctorInfo?.gender}
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Briefcase className="w-5 h-5 mr-2" />
            Doctor Information
          </h2>
          <div className="space-y-2">
            <p className="text-gray-600 flex items-center">
              <GraduationCap className="w-4 h-4 mr-2" />
              <strong>Degree:</strong> {doctorInfo?.degree}
            </p>
            <p className="text-gray-600 flex items-center">
              <Briefcase className="w-4 h-4 mr-2" />
              <strong>Experience:</strong> {doctorInfo?.experience}
            </p>
            <p className="text-gray-600">
              <strong>Bio:</strong> {doctorInfo?.bio}
            </p>
          </div>
        </section>

        <section className="md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Phone className="w-5 h-5 mr-2" />
            Contact Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="text-gray-600 flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              <strong>Email:</strong> {user?.email}
            </p>
            <p className="text-gray-600 flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              <strong>Phone:</strong> {doctorInfo?.number}
            </p>
            <p className="text-gray-600 flex items-center md:col-span-2">
              <Building className="w-4 h-4 mr-2" />
              <strong>Office Address:</strong> {doctorInfo?.address}
            </p>
          </div>
        </section>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2" />
          Select Appointment Date
        </h2>
        <DatePicker />
      </div>

      <div className="mt-8 flex justify-center">
        {
          session ? (
            <Button className="transition-all w-full duration-300 ease-in-out transform hover:scale-105">
              Book an Appointment
            </Button>)
            : (
              <Link href="/signin">
                <Button className="transition-all w-full duration-300 ease-in-out transform hover:scale-105">
                  Login To Book Appoinment
                </Button>
              </Link>)
        }
      </div>
    </div>
  );
}

