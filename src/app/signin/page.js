import { Button } from "@/components/ui/button";
import { auth, signIn } from "../../../auth";
import { redirect } from "next/navigation";




export default async function Signin() {

    const session = await auth();
    if(session) redirect("/")

    return (
        <div className="min-h-screen items-center justify-center mx-auto  text-center">
            <h1 className="text-center text-3xl font-semibold justify-center m-10"> Signin </h1>
            {/* <Button className="w-80"> Continue With Google</Button> */}
            <form
                action={async () => {
                    "use server"
                    await signIn("google")
                }}
            >
                <Button type="submit">Signin with Google</Button>
            </form>

        </div>
    )
}