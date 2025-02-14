async function fetchWithFallback(primaryUrl, fallbackUrl) {
    try {
        const response = await fetch(primaryUrl);
        if (!response.ok) {
            throw new Error(`Primary request failed with status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.warn("Primary request failed. Trying fallback...");
        try {
            const fallbackResponse = await fetch(fallbackUrl);
            if (!fallbackResponse.ok) {
                throw new Error(`Fallback request failed with status: ${fallbackResponse.status}`);
            }
            return await fallbackResponse.json();
        } catch (fallbackError) {
            throw new Error("Both primary and fallback requests failed.");
        }
    }
}

fetchWithFallback('https://jsonplaceholder.typicode.com/todos/1', 'https://jsonplaceholder.typicode.com/todos/2').then(data => {
    console.log("Received data:", data);
}).catch(error => {
    console.error("Error fetching data:", error);
});
