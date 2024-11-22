import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { Button } from "@/components/ui/button"
import { getRequest } from "@/actions/requests";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import Link from "next/link"
import DoctorDetailSheet from "@/components/DoctorDetailSheet";

export default async function Requests() {
    const session = await auth();
    if (!session || session?.user?.roll != "admin") redirect("/");

    const { requests } = await getRequest();
    console.log("request--==>>>", requests)

    return (
        <div className="max-w-screen-xl container text-center my-5 p-4 mx-auto">
            <h1 className="text-3xl mb-6 font-bold">
                {" Doctor's"} Requests
            </h1>

            <div className="grid grid-cols-4 ">
                {
                    requests?.map((request) => {
                        return (<Card key={ request._id} className={"w-[300px]"}>
                            <CardHeader>
                                <div className="flex justify-between items-center">

                                    <CardTitle>{''}</CardTitle>
                                    <Avatar>
                                        <AvatarImage className="w-10  rounded-full" src={''} alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                {/* <CardDescription>{request.category}</CardDescription>
                                <CardDescription>{request.hospital}</CardDescription> */}
                            </CardHeader>
                            <CardFooter className="flex justify-between">
                                <div className=" ">

                                    <CardDescription >
                                        {request.hospital}
                                    </CardDescription>
                                    <CardDescription>
                                        {request.gender}
                                    </CardDescription>
                                    <CardDescription>
                                        {request.fees}
                                    </CardDescription>
                                </div>
                                <DoctorDetailSheet />
                                
                            </CardFooter>
                        </Card>)
                    }



                    )
                }
            </div>
        </div>
    )
}

