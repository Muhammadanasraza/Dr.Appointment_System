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
import Link from "next/link"
import Image from "next/image"
import { getRequest } from "@/actions/requests"
import DoctorCard from "./DoctorCard"


export default async function Doctor({ isHome }) {


    // const filtered = isHome ? doctors.slice(0, 6) : doctors;
    const {requests} = await getRequest("accepted")

    return (
        <>
            <div className="max-w-screen-xl container flex mb-10 flex-wrap items-center  mx-auto ">

                <div className="max-w-screen-xl p-4 container flex flex-wrap items-center justify-between mx-auto ">
                    <h1 className="font-extrabold  text-3xl"> Doctor</h1>
                    {
                        isHome ?
                            <Link href={"/doctors"}>
                                <Button className="px-20 max-sm:px-6 ">Show All </Button>
                            </Link> :
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
                    }
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 max-sm:px-3 sm:grid-cols-2  lg:grid-col-4  gap-5 my-10 justify-between container">

                    {
                        requests.map((request) => 
                        (<DoctorCard key={request._id} request={request} isAdmin={false}/>)
                    )
                    }

                </div>


            </div>
        </>
    );
}