import connectDb from "@/lib/connectDb";
import { RequestModal } from "@/lib/models/RequestModal";
import { UserModal } from "@/lib/models/UserModal";






export async function GET(req, { params }) {
    await connectDb()
    console.log("params",params)
    
    const requests = await RequestModal.findOne({ _id: params.id}).populate("user");

    console.log("dataaaaa", requests)   
    return Response.json(
        {
            error: false,
            msg: "Single Request fetched Successfully",
            requests,
        }, { status: 200 }
    )

}

    // export async function PUT(req) {
    //     await connectDb()
    //     try {
    //         const obj = await req.json();
    //         let { id, status } = obj;
    //         const request = await RequestModal.findOne({ _id: id });

    //         await UserModal.findOneAndUpdate({ _id: request.user }, { roll: "doctor" });

    //         const updated = await RequestModal.findOneAndUpdate({
    //             _id: id
    //         }, {
    //             status: status
    //         }).exec();

    //         return Response.json(
    //             {
    //                 error: false,
    //                 msg: "Request Updated  Successfully",
    //                 request: updated,

    //             }, { status: 201 })
    //     }
    //     catch (err) {
    //         return Response.json(
    //             {
    //                 error: true,
    //                 msg: "Request is not Updated",
    //                 request: updated,

    //             }, { status: 500 })
    //     }
    // }


export async function DELETE(req) {

}