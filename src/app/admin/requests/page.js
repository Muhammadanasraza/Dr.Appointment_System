import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import { getRequest } from "@/actions/requests";



import { Button } from "@/components/ui/button"
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


export default async function MyRequests() {

    const session = await auth();
    if (!session && session?.user?.roll != "admin") redirect("/");

    const requests = await getRequest();
    console.log("request==>>>", requests)

    return (
        <div className="text-center my-5 mx-auto">
            <h1 className="text-3xl mb-6 font-bold ">
                {`Doctor's`} Requests

            </h1>

            <div className="grid grid-cols-4 max-w-screen-xl px-4 py-8 mx-auto ">

                {/* {requests?.map((request) => {
                    return ( */}

                        <Card className="w-[300px] max-sm:w-[350px] mx-auto  ">
                            <CardHeader>
                                <div className="flex justify-between items-center">

                                    <CardTitle>{}</CardTitle>
                                    <Avatar>
                                        <AvatarImage className="w-10  rounded-full" src={""} alt="@shadcn" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <CardDescription>{ }</CardDescription>
                                <CardDescription>{ }</CardDescription>
                            </CardHeader>
                            <CardFooter className="flex justify-between">
                                <div className=" ">

                                    <CardDescription >
                                        { }
                                    </CardDescription>
                                    <CardDescription>
                                        { }
                                    </CardDescription>
                                    <CardDescription>
                                        { }
                                    </CardDescription>
                                </div>
                                <Link href={``}>
                                    <Button className="border  hover:text-red-600" variant={"secondary"}>See Detail</Button>
                                </Link>
                            </CardFooter>
                        </Card>

                    {/* )
                })} */}




            </div>
        </div>
    )
}