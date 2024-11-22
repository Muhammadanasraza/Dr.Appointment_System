import DoctorForm from "@/components/ApplyForm";
import { auth } from "../../../../auth";



export default async function ApplyAsDoctor() {

   const session = await auth();



    return (
        <div className="max-w-screen-xl mt-10 p-4 container flex flex-wrap items-center  mx-auto">

            <h1 className="mx-auto text-2xl container font-bold">Apply As Doctor on Our Platform</h1>
            <p className="text-secondary-foreground mt-4">Apply As Doctor on Our Platform Apply As Doctor on Our PlatformApply As Doctor on Our PlatformApply As Doctor on Our PlatformApply As Doctor on Our PlatformApply As Doctor on Our PlatformApply  </p>

            <DoctorForm   session={session}/>




        </div>



    )
}