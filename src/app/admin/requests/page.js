import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { getRequest } from "@/actions/requests";

import DoctorRequests from "@/components/RequestSection";

export default async function Requests({ searchParams }) {
    const  {status}  = await searchParams;
  console.log( 'searchParamas=>>>', status);

    const session = await auth();
    if (!session || session?.user?.roll != "admin") redirect("/");

    const { requests } = await getRequest(status);
    console.log("request--==>>>", requests)

    return (
        <div className="max-w-screen-xl container text-center my-5 p-4 mx-auto">
            <h1 className="text-3xl text-left font-sans mb-6 font-bold">
                {" Doctor's"} Request
            </h1>

            <DoctorRequests status={status} requests={requests} />






        </div>
    )
}

