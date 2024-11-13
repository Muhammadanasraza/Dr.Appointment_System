import { Button } from "@/components/ui/button"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import Link from "next/link"
import { auth } from "../../auth"
import LogoutButton from "./Logout"



export default async function Header() {

    const session = await auth();

    // console.log("session me kiya hai bhai=>>>",session)

    return (
        <>
            <nav className="bg-gray-100 container items-center mx-auto border-gray-200 dark:bg-gray-900">
                <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="#"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        {/* <img
                                src="https://flowbite.com/docs/images/logo.svg"
                                className="h-8"
                                alt="Flowbite Logo"
                            /> */}
                        <span className="self-center font-extrabold text-2xl  whitespace-nowrap dark:text-white">
                            Health<span className="text-red-600">-</span>Connect
                        </span>
                    </a>
                    {
                        session ?
                            <div>
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        {/* <Button variant="outline">Open</Button> */}
                                        <Avatar>
                                            <AvatarImage src={session.user.image} alt="@shadcn" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <Link href="/profile">
                                                <DropdownMenuItem>
                                                    Profile
                                                    <DropdownMenuShortcut>⇧⌘</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                            </Link>
                                            <Link href="/appointment">
                                                <DropdownMenuItem>
                                                    My Appointment
                                                    <DropdownMenuShortcut>⌘</DropdownMenuShortcut>
                                                </DropdownMenuItem>
                                            </Link>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem >
                                            Log out
                                            <DropdownMenuShortcut>⇧⌘</DropdownMenuShortcut>
                                        </DropdownMenuItem>
                                        {/* <LogoutButton /> */}
                                    </DropdownMenuContent>
                                </DropdownMenu>

                            </div>
                            :
                            <Link href="/signin">

                                <Button>
                                    SignIn
                                </Button>
                            </Link>

                    }

                </div>
            </nav>




        </>
    )
}