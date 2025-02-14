async function fetchDataAsync(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Received data:", data);
        processData(data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function processData(data) {
    console.log("Processing data:", data);
}

fetchDataAsync('https://jsonplaceholder.typicode.com/todos/1');
