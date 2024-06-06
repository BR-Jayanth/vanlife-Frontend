
//  miraj Js api setup


export async function getVans() {

    const response = await fetch(`/api/vans/`);
    if (!response.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: response.statusText,
            status: response.status,
        }
    }
    // throw {
    //     message: "Failed to fetch vans",
    //     statusText: response.statusText,
    //     status: response.status,
    // }
    const data = await response.json();
    return data;

}


export async function getVan(id) {

    const response = await fetch(`/api/vans/${id}`)
    if (!response.ok) {
        throw {
            message: `Failed to fetch van ${id}`,
            statusText: response.statusText,
            status: response.status,
        }
    }

    const data = await response.json();
    console.log("inside api get van", data)
    return data;
}




export async function getHostVans() {
    const response = await fetch(`/api/host/vans`);
    if (!response.ok) {
        throw {
            message: `Failed to fetch vans `,
            statusText: response.statusText,
            status: response.status,
        }
    }
    const data = await response.json();
    return data;
}


export async function getHostVan(id) {
    const response = await fetch(`/api/host/vans/${id}`)
    if (!response.ok) {
        throw {
            message: `Failed to fetch van ${id}`,
            statusText: response.statusText,
            status: response.status,
        }
    }

    const data = await response.json();
    return data;
}

export async function loginUser(cred) {
    const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(cred),
    })
    console.log("inside api", response)
    if (!response.ok) {
        throw {
            message: `Failed to fetch user`,
            statusText: response.statusText,
            status: response.status,
        }
    }
    const data = await response.json();
    console.log("inside api", data)
    // throw {
    //     message: "Incorrect Email or Password !..",
    //     statusText: response.statusText,
    //     status: response.status,
    // }
    return data;

}
