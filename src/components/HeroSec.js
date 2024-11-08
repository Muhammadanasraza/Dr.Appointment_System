import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";






export default function HeroSec() {

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
                                    <svg
                                        className="w-5 h-5 ml-2 -mr-1 text-red-600"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </Button>
                            </Link>
                            <Button variant="secondary"
                                href="#"
                                className=" py-6 font-semibold border border-black"
                            >
                                Apply as Doctor
                            </Button>
                        </div>
                    </div>
                    <div className="hidden relative  lg:mt-0 lg:col-span-5 lg:flex">
                        <Image className="rounded"
                            //   width={400}
                            //   height={400}
                            fill="true"
                            src="https://img.freepik.com/free-photo/delivery-man-employee-red-cap-blank-tshirt-uniform-looking-camera-happy-positive-smiling-cheerfully-presenting-with-arms-his-hands-something-standing-blue-background_141793-140382.jpg?t=st=1730475237~exp=1730478837~hmac=6cd3bb8152d5c6e6d192c2d360db456c8416a15213e0770f91cd784bd45f5e6f&w=996"
                            alt="mockup"
                        />
                    </div>
                </div>
            </section>




        </>
    )
}