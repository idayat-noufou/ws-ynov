import { WebSocketServer } from 'ws';

function fetchData() {
    return fetch('https://randomuser.me/api/?gender=female')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Data received: ', JSON.stringify(data));
            return data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

const wss = new WebSocketServer({port : 8080});

wss.on('connection', function connection(ws) {
    ws.send('Welcome to the server');
    fetchData().then((data) => {
        ws.send(JSON.stringify(data));
    });
});