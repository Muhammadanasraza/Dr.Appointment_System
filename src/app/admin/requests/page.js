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
import { ClockIcon, EyeIcon, HomeIcon, PlusIcon } from "lucide-react";

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

            <div className="grid grid-cols-4 gap-3 ">
                {
                    requests?.map((request) => {
                        return (
                            <Card key={request._id}>
                                <CardHeader className="flex flex-row items-center space-x-4 justify-between">
                                    <Avatar className="h-10 w-10 ">
                                        <AvatarImage className="rounded-full"
                                            src={request.user.picture}
                                            alt={request.user.firstName}
                                        />
                                        <AvatarFallback>
                                            {request.user.firstName.charAt(0)}
                                            {request.user.lastName?.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="text-right">
                                        <CardTitle>{`${request.user.firstName} ${request.user.lastName || ""}`}</CardTitle>
                                        <CardDescription className="capitalize">
                                            {request.status}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-2 font-sans">
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-2">
                                                <HomeIcon className="h-4 w-4" />
                                                <span className="font-semibold">Gender</span>
                                            </div>
                                            <span className="font-sans">{request.gender}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-2">
                                                <PlusIcon className="h-4 w-4" />
                                                <span className="font-semibold">Hospital</span>
                                            </div>
                                            <span className="font-sans">{request.hospital}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-2">
                                                <ClockIcon className="h-4 w-4" />
                                                <span className="font-semibold">Degree</span>
                                            </div>
                                            <span className="font-sans">{request.degree}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center space-x-2">
                                                <span className="font-semibold">See Deatil</span>
                                            </div>
                                            <DoctorDetailSheet request={request}/>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

