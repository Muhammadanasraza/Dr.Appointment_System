import connectDb from "@/lib/connectDb";

import { UserModal } from "@/lib/models/UserModal"




export async function POST(req) {

    await connectDb()
    try {
        const obj = await req.json()

        let newUser = await new UserModal({ ...obj });

        newUser = await newUser.save()

        return Response.json({
            error: false,
            msg: "User Reg Successfully",
            user: newUser
        }, { status: 201 })

    } catch (e) {
        return Response.json({
            error: true,
            msg: "Something went Wrong",

        }, { status: 400 })
    }
}



export async function GET(req) {

    await connectDb()

    const user = await UserModal.find()

    return Response.json({
        error: false,
        msg: "User fetched Successfully",
        user: user
    }, { status: 200 })

}

export async function PUT(req) {

}

export async function DELETE(req) {

}