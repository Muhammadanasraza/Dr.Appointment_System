"use client"

import * as React from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { useToast } from "@/hooks/use-toast"
import { addAppointment } from "@/actions/appointment"
import { revalidatePath } from "next/cache"
import Link from "next/link"

export function DatePicker({ session, request }) {

    const [date, setDate] = React.useState()

    const { toast } = useToast()

    const handleBookAppointment = async () => {
        let isDateInFuture = Date.now() < new Date(date);
        if (!isDateInFuture) return toast({
            title: "Alert",
            description: "Please Select Future Date",
        })

        const obj = { user: session.user._id, request: request, date };
        const response = await addAppointment(obj);
        toast({
            title: "Congratulations",
            description: "Your Appointment Is Booked , You will Soon Conformation",
        })
        
    }

    return (
        <div className="mt-4 ">

            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[240px] justify-start border-2 text-left font-normal ",
                            !date && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>

            <div className="mt-8 flex justify-center">
                {
                    session ? (
                        <Button onClick={handleBookAppointment} className="transition-all w-full duration-300 ease-in-out transform hover:scale-105">
                            Book an Appointment
                        </Button>)
                        :
                        <Link href="/signin">
                            <Button className="transition-all w-full duration-300 ease-in-out transform hover:scale-105">
                                Login To Book Appoinment
                            </Button>
                        </Link>
                }
            </div>
        </div>
    )
}
