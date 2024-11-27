
"use server";

export  async function addRequest(data) {
    let add = await fetch(`${process.env.BASE_URL}api/requests`, {
        method: "POST",
        body: JSON.stringify(data),
    });
    add = await add.json()
    return add;
};


export  async function getRequest() {
    let request = await fetch(`${process.env.BASE_URL}api/requests`);
    request = request.json(); 

    return request;
};  


export async function updateRequest(id, status) {
    let requests = await fetch(`${process.env.BASE_URL}api/requests`, {
      method: "PUT",
      body: JSON.stringify({ id, status }),
    });
    requests = requests.json();
    revalidatePath("/admin/requests");
    return requests;
  }

