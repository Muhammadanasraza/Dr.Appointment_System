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


export default function Doctor({ isHome }) {


    const filtered = isHome ? doctors.slice(0, 6) : doctors;

    return (
        <>
            <div className="max-w-screen-xl container flex mb-10 flex-wrap items-center  mx-auto ">

                <div className="max-w-screen-xl p-4 container flex flex-wrap items-center justify-between mx-auto ">
                    <h1 className="font-extrabold  text-3xl"> Doctor</h1>
                    {
                        isHome ?
                            <Link href={"/doctors"}>
                                <Button className="px-20">Show All </Button>
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
                <div className="grid grid-cols-1 md:grid-cols-3  sm:grid-cols-2  lg:grid-col-4  gap-5 my-10 justify-between container">

                    {
                        filtered.map((doctors, index) => (

                            <Card key={index} className="w-[400px] mx-auto flex justify-between ">
                                <CardHeader >
                                    <div className="flex items-center gap-3">

                                        <div>
                                            <Image className="rounded-full"
                                                width={40}
                                                height={40}
                                                src={doctors.image}
                                                alt="DAS"

                                            />
                                        </div>
                                        <div className="">
                                            <CardTitle className="pb-1">{doctors.name}</CardTitle>
                                            <CardDescription>{doctors.category}</CardDescription>

                                        </div>
                                    </div>
                                </CardHeader>
                                <CardHeader>
                                    <Link href={`/doctors/${doctors.id}`}>
                                        <Button  className="border hover:text-red-600" variant="secondary">See Detail</Button>
                                    </Link>
                                </CardHeader>


                            </Card>)
                        )
                    }

                </div>


            </div>
        </>
    );
}