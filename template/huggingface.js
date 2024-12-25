const API_URL = "https://api-inference.huggingface.co/models/black-forest-labs/FLUX.1-dev";
const API_TOKEN = "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";

async function query(payload) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${API_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    console.log("Response status:", response.status); // Debug response status

    if (!response.ok) {
        const errorMessage = await response.text();
        console.error(`Error: ${response.status} - ${response.statusText}`);
        console.error(`Details: ${errorMessage}`);
        throw new Error("Request failed");
    }

    const contentType = response.headers.get("Content-Type");
    console.log("Content-Type:", contentType); // Debug content type

    if (contentType.includes("application/json")) {
        const json = await response.json();
        console.log("JSON Response:", json); // Debug JSON response
        return json;
    } else if (contentType.includes("image")) {
        const blob = await response.blob();
        console.log("Blob Response:", blob); // Debug Blob response
        return blob;
    } else {
        throw new Error("Unexpected content type: " + contentType);
    }
}
