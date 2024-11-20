import { redirect } from "next/navigation";
import { auth } from "../../../../auth";






export default async function MyRequests() {

    const session = await auth(); 

    if( !session && session?.user?.roll != "admin" ) redirect("/")


    return (
        <div className="text-center my-5 mx-auto">
            <h1 className="text-3xl mb-6 font-bold ">
               {`Doctor's`} Requests

            </h1>
        </div>
    )
}