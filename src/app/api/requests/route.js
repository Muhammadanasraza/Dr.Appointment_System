import connectDb from "@/lib/connectDb";
import { RequestModal } from "@/lib/models/RequestModal";





export async function POST(req) {
    await connectDb()
    try {
        const obj = await req.json()

        const isUserAdded = await RequestModal.findOne({ user: obj.user });
        if (isUserAdded) {
            return Response.json({
                error: true,
                msg: "Your are already Registered",

            }
                , { status: 403 })
        };



        let newRequest = await new RequestModal({ ...obj });
        newRequest = await newRequest.save()

        return Response.json(
            {
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
    const requests = await RequestModal.find().populate("user");

    // console.log("dataaaaa", requests)
    return Response.json(
        {
            error: false,
            msg: "Request is fetched Successfully",
            requests,
        }, { status: 200 }
    )

}

export async function PUT(req) {
    await connectDb()
    try {
        const obj = await req.json();
        const { id, status } = obj;

        const updated = await RequestModal.findOneAndUpdate({
            _id: id
        }, {
            status: status
        }).exec();
        return Response.json(
            {
                error: false,
                msg: "Request Updated  Successfully",
                request: updated,

            }, { status: 201 }) 
    }
    catch (err) {
        return Response.json(
            {
                error: true,
                msg: "Request is not Updated",
                request: updated,

            }, { status: 500 }) 
    }
    }


export async function DELETE(req) {

}