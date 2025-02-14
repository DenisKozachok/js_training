function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Received data:", data);
            processData(data);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}

function processData(data) {
    console.log("Processing data:", data);
}

fetchData('https://jsonplaceholder.typicode.com/todos/1');
