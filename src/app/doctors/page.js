import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { categories  } from "@/lib/doctor"

import * as React from "react"

import { getRequest } from "@/actions/requests"
import DoctorCard from "@/components/DoctorCard"



export default async function DoctorPage() {


    // const filtered = isHome ? doctors.slice(0, 6) : doctors;
    
    const {requests} = await getRequest("accepted")

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
                        requests.map((request) => 
                        (<DoctorCard key={request._id} request={request} isAdmin={false}/>)
                    )
                    }


                </div>

            </div>
        </>
    );
}