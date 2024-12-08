
"use server";

import { revalidatePath } from "next/cache";

export async function addAppointment(data) {
    let add = await fetch(`${process.env.BASE_URL}api/appointment`, {
        method: "POST",
        body: JSON.stringify(data),
    });
    add = add.json()
    return add;
};


export async function getAppointment(role , id) {
    let url 
    if(role = "user" ){
        url = `${process.env.BASE_URL}api/appointment?user=${id}`
    }else{
        url = `${process.env.BASE_URL}api/appointment?doctor=${id}`
    }
    let appointment = await fetch(url, {
        cache: "no-cache"
    });
    appointment = appointment.json();

    return appointment;
};

// export async function getSingleRequest(id) {
//     let request = await fetch(`${process.env.BASE_URL}api/requests/${id}`);
//     request = request.json();

//     return request;
// };


// export async function updateRequest(id, status) {
//     let requests = await fetch(`${process.env.BASE_URL}api/requests`, {
//         method: "PUT",
//         body: JSON.stringify({ id, status }),
        
//     });
//     requests = requests.json();
   
//    revalidatePath("/admin/requests");
   
//     return requests;
// }

