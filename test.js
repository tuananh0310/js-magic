function fetchData(callback) {
    // set the API endpoint URL to a variable
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';

    // fetch data using the API endpoint URL
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // call the callback function with the parsed data
            callback(data);
        })
        .catch(error => {
            // handle any errors that occur during the fetch process
            console.error('Error fetching data:', error);
        });
}

// define a separate function to handle the retrieved data
function handleData(data) {
    console.log('Received data:', data);
}

// call the fetchData function, passing the handleData function as a callback
fetchData(handleData);