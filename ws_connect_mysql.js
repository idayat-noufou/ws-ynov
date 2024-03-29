const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql-11c89abc-ynov-ws-jin-mysql.a.aivencloud.com',
    user: 'avnadmin',
    password: 'AVNS_yI5h71cNk1drv3vvLGd',
    port: 25662,
    database: 'defaultdb'
});

connection.connect((err) => {
    if (err) {
        console.error('Erreur lors de la connexion à la base de données :', err.stack);
        process.exit(1); // Quitter avec code d'erreur
    }
    console.log('Connecté à la base de données avec succès.');
    process.exit(0); // Quitter avec succès
});


module.exports = connection;
