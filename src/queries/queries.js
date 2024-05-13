 const api_url = `${window.location.origin}/api`;


async function addBurden({message, email}) {
    const url = api_url + "/add-burden";
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({message, email}),
    });

    return response.json();
}

async function fetchBurdens() {
    const url = api_url + "/fetch-burdens";
    const response = await fetch(url);
    return response.json();
}

export {addBurden, fetchBurdens};