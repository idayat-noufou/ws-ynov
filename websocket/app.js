const { WebSocketServer } = require('ws');

async function fetchRandomUser() {
    return (await fetch('https://randomuser.me/api/')).json();
}

console.log('Starting server');
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', async function connection(ws) {
    ws.send('Welcome to the server!');

    // Fonction pour envoyer périodiquement des données au client
    const intervalId = setInterval(async () => {
        // Vérifier si le client est toujours connecté
        if (ws.readyState === ws.OPEN) {
            fetchRandomUser().then((data) => {
                ws.send(JSON.stringify(data));
            });
        } else {
            // Le client s'est déconnecté, arrêter l'envoi de données
            clearInterval(intervalId);
            console.log('Client disconnected, stopped sending data.');
        }
    }, 2000);

    // Gestionnaire d'événements pour la fermeture de la connexion
    ws.on('close', () => {
        // Le client s'est déconnecté, arrêter l'envoi de données
        clearInterval(intervalId);
        console.log('Client disconnected, stopped sending data.');
    });
});
