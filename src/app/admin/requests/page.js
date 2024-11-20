import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { getRequest } from "@/actions/requests";






export default async function MyRequests() {

    const session = await auth();
    if (!session && session?.user?.roll != "admin") redirect("/");

    const  requests  = await getRequest();
    console.log("request==>>>", requests)

    return (
        <div className="text-center my-5 mx-auto">
            <h1 className="text-3xl mb-6 font-bold ">
                {`Doctor's`} Requests

            </h1>

            <div className="grid grid-cols-3">
{session.map(()) }
              </div>
        </div>
    )
}