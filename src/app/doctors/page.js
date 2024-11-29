import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { categories, doctors } from "@/lib/doctor"

import * as React from "react"

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



export default function DoctorPage({ isHome }) {


    const filtered = isHome ? doctors.slice(0, 6) : doctors;

    return (
        <>
            <div className="max-w-screen-xl container flex flex-wrap items-center  mx-auto ">

                <div className="max-w-screen-xl p-4 container flex flex-wrap items-center justify-between mx-auto ">
                    <h1 className="font-extrabold  text-3xl"> Doctors</h1>
                    <Select>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select a fruit" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Doctors</SelectLabel>
                                {
                                    categories.map((categories) =>
                                        <SelectItem key={categories} value={categories}>{categories}</SelectItem>
                                    )
                                }
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                <div className="grid grid-cols-1  md:grid-cols-3  max-sm:grid-cols-1  min-lg:grid-col-4  gap-5 my-10 justify-between container">


                    {
                        filtered.map((doctors, index) => (

                            <Card key={index} className="w-[400px] max-sm:w-[350px] mx-auto  ">
                                <CardHeader>
                                    <div className="flex justify-between items-center">

                                        <CardTitle>{doctors.name}</CardTitle>
                                        <Avatar>
                                            <AvatarImage className="w-10  rounded-full" src={doctors.image} alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </div>
                                    {/* <CardDescription>{doctors.category}</CardDescription> */}
                                    {/* <CardDescription>{doctors.hospital}</CardDescription> */}
                                    {/* <Button className="border" variant="secondary">Apply</Button> */}
                                </CardHeader>
                                <CardFooter className="flex justify-between">
                                    <div className=" ">

                                        <CardDescription >
                                            {doctors.appointmentTime}
                                        </CardDescription>
                                        <CardDescription>
                                            {doctors.gender}
                                        </CardDescription>
                                        <CardDescription>
                                            {doctors.fees}
                                        </CardDescription>
                                    </div>
                                    <Link href={`/doctors/${doctors.id}`}>
                                        <Button className="border  hover:text-red-600" variant={"secondary"}>See Detail</Button>
                                    </Link>
                                </CardFooter>
                            </Card>)
                        )
                    }

                </div>

            </div>
        </>
    );
}