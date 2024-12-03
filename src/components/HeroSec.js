import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { auth } from "../../auth";






export default async function HeroSec() {


    const session = await auth();

    return (
        <>

            <section className="bg-white my-10 dark:bg-gray-900 container mx-auto ">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                            Your Health<span className="text-red-600">,</span>Our Priority
                            
                        </h1>
                        
                        <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                            Dedicated to compassionate care, cutting-edge technology, and patient-centered services. our team is committed to ensuring you and your loved ones receive the highest quality of care every step of the way.
                        </p>
                        <div className="flex my-10 gap-2">
                            <Link href={"/doctors"}>
                                <Button
                                    className=" py-6 font-semibold "
                                >
                                    Find Your Doctor
                                    
                                </Button>
                            </Link>
                            <Link href={session? "/doctors/applyasdoctor" : "/signin"}>
                                <Button variant="secondary"
                                    href="#"
                                    className=" py-6 font-semibold border border-black"
                                >
                                    Apply as Doctor
                                </Button>
                            </Link>
                        </div>
                    </div>
                    <div className="hidden relative  lg:mt-0 lg:col-span-5 lg:flex">
                        <Image className="rounded"
                            //   width={400}
                            //   height={400}
                            fill="true"
                            src="https://media.istockphoto.com/id/1178807250/photo/doctor-shows-a-sign-of-protection-of-health.jpg?s=612x612&w=0&k=20&c=8bejV7NZOwR4CP31DfqBK8UKOwWLU0Q8kdgWS4ACrA0="
                            alt="mockup"
                        />
                    </div>
                </div>
            </section>




        </>
    )
}