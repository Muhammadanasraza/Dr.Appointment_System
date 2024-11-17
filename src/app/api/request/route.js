import connectDb from "@/lib/connectDb";
import { RequestModal } from "@/lib/models/RequestModal";

// import { RequestModal } from "@/lib/models/RequestModal"




export async function POST(req) {

    await connectDb()
    try {
        const obj = await req.json()

        let newRequest = await new RequestModal({ ...obj });

        newRequest = await newRequest.save()

        return Response.json({
            error: false,
            msg: "Request is Submited  Successfully",
            request: newRequest,

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

    const request = await RequestModal.find()

    return Response.json({
        error: false,
        msg: "Request is fetched Successfully",
        request
    }, { status: 200 })

}

export async function PUT(req) {

}

export async function DELETE(req) {

}