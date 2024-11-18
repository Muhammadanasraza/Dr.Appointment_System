
"use server";

export default async function addRequest(data) {

    let add = await fetch(`${process.env.BASE_URL}api/requests`, {
        method: "POST",
        body: JSON.stringify(data),
    });

    add = add.json()

    return add;
}