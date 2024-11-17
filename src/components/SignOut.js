import { signOut } from "../../auth"


export default function SignOut() {

    return (
        <>

            <form
                action={async () => {
                    "use server"
                    await signOut("google")
                }}
            >
                <button className="pl-2 hover:bg-slate-100 rounded-sm w-full text-left" type="submit"> Logout</button>
            </form>


        </>
    )
}