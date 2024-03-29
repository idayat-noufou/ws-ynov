const connection = require('./ws_connect_mysql');

// Requêtes pour créer les tables
const createTableQuery1 = `
    CREATE TABLE IF NOT EXISTS ws_mask (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nom VARCHAR(255),
        description VARCHAR(255),
        mask_json VARCHAR(255)
    )
`;

const createTableQuery2 = `
    CREATE TABLE IF NOT EXISTS ws_entities (
        id INT AUTO_INCREMENT PRIMARY KEY,
        id_mask INT, 
        entry_json VARCHAR(255)
    )
`;

// Exécution des requêtes de création de table
connection.query(createTableQuery1, (error1, results1, fields1) => {
    if (error1) {
        console.error('Erreur lors de la création de la table ws_mask :', error1.message);
        process.exit(1); // Quitter avec code d'erreur
    }
    console.log('La table ws_mask a été créée avec succès.');

    connection.query(createTableQuery2, (error2, results2, fields2) => {
        if (error2) {
            console.error('Erreur lors de la création de la table ws_entities :', error2.message);
            process.exit(1); // Quitter avec code d'erreur
        }
        console.log('La table ws_entities a été créée avec succès.');

    });
    connection.end(() => {
        console.log("Close BDD")
    })
    connection.destroy();
});
