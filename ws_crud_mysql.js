const mysql = require('mysql2');

// Fonction pour créer une nouvelle connexion à la base de données
function createConnection() {
    return mysql.createConnection({
        host: 'mysql-11c89abc-ynov-ws-jin-mysql.a.aivencloud.com',
        user: 'avnadmin',
        password: 'AVNS_yI5h71cNk1drv3vvLGd',
        port: 25662,
        database: 'defaultdb'
    });
}

// Fonction pour créer un masque
function createMask(nom, description, mask_json) {
    const connection = createConnection();
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                reject('Erreur lors de la connexion à la base de données : ' + err.stack);
                return;
            }
            const insertQuery = `INSERT INTO ws_mask (nom, description, mask_json) VALUES (?, ?, ?)`;
            connection.execute(insertQuery, [nom, description, mask_json], (error, results, fields) => {
                if (error) {
                   reject('Erreur lors de la création de l\'enregistrement dans ws_mask : ' + error.message);
                    return;
                }
                resolve('Enregistrement créé avec succès dans ws_mask.');
                connection.end(); // Fermer la connexion après l'opération
            });
        });
    });
}

// Fonction pour lire tous les masques
function readMasks() {
    const connection = createConnection(); // Créer une nouvelle connexion
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                reject('Erreur lors de la connexion à la base de données : ' + err.stack);
                return;
            }
            const selectQuery = `SELECT * FROM ws_mask`;
            connection.query(selectQuery, (error, results, fields) => {
                if (error) {
                    reject('Erreur lors de la lecture des enregistrements dans ws_mask : ' + error.message);
                    return;
                }
                resolve('Enregistrements lus avec succès dans ws_mask : ' + JSON.stringify(results));
                connection.end(); // Fermer la connexion après l'opération
            });
        });
    });
}

// Fonction pour mettre à jour un masque
function updateMask(id, nom, description, mask_json) {
    const connection = createConnection(); // Créer une nouvelle connexion
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                reject('Erreur lors de la connexion à la base de données : ' + err.stack);
                return;
            }
            const updateQuery = `UPDATE ws_mask SET nom=?, description=?, mask_json=? WHERE id=?`;
            connection.execute(updateQuery, [nom, description, mask_json, id], (error, results, fields) => {
                if (error) {
                    console.error('Erreur lors de la mise à jour de l\'enregistrement dans ws_mask : ' + error.message);
                    return;
                }
                resolve('Enregistrement mis à jour avec succès dans ws_mask.');
                connection.end(); // Fermer la connexion après l'opération
            });
        });
    });
}

// Fonction pour supprimer un masque
function deleteMask(id) {
    const connection = createConnection(); // Créer une nouvelle connexion
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                console.error('Erreur lors de la connexion à la base de données : ' + err.stack);
                return;
            }
            const deleteQuery = `DELETE FROM ws_mask WHERE id=?`;
            connection.execute(deleteQuery, [id], (error, results, fields) => {
                if (error) {
                    console.error('Erreur lors de la suppression de l\'enregistrement dans ws_mask : ' + error.message);
                    return;
                }
                resolve('Enregistrement supprimé avec succès dans ws_mask.');
                connection.end(); // Fermer la connexion après l'opération
            });
        });
    });
}

// Fonction pour créer une entité
function createEntity(id_mask, entry_json) {
    const connection = createConnection(); // Créer une nouvelle connexion
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                reject('Erreur lors de la connexion à la base de données : ' + err.stack);
                return;
            }
            const insertQuery = `INSERT INTO ws_entities (id_mask, entry_json) VALUES (?, ?)`;
            connection.execute(insertQuery, [id_mask, entry_json], (error, results, fields) => {
                if (error) {
                    reject('Erreur lors de la création de l\'enregistrement dans ws_entities : ' + error.message);
                    return;
                }
                resolve('Enregistrement créé avec succès dans ws_entities.');
                connection.end(); // Fermer la connexion après l'opération
            });
        });
    });
}

// Fonction pour lire toutes les entités
function readEntities() {
    const connection = createConnection(); // Créer une nouvelle connexion
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                reject('Erreur lors de la connexion à la base de données : ' + err.stack);
                return;
            }
            const selectQuery = `SELECT * FROM ws_entities`;
            connection.query(selectQuery, (error, results, fields) => {
                if (error) {
                    reject('Erreur lors de la lecture des enregistrements dans ws_entities : ' + error.message);
                    return;
                }
                resolve('Enregistrements lus avec succès dans ws_entities : ' + JSON.stringify(results));
                connection.end(); // Fermer la connexion après l'opération
            });
        });
    });
}

// Fonction pour mettre à jour une entité
function updateEntity(id, id_mask, entry_json) {
    const connection = createConnection(); // Créer une nouvelle connexion
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                reject('Erreur lors de la connexion à la base de données : ' + err.stack);
                return;
            }
            const updateQuery = `UPDATE ws_entities SET id_mask=?, entry_json=? WHERE id=?`;
            connection.execute(updateQuery, [id_mask, entry_json, id], (error, results, fields) => {
                if (error) {
                    reject('Erreur lors de la mise à jour de l\'enregistrement dans ws_entities : ' + error.message);
                    return;
                }
                resolve('Enregistrement mis à jour avec succès dans ws_entities.');
                connection.end(); // Fermer la connexion après l'opération
            });
        });
    });
}

// Fonction pour supprimer une entité
function deleteEntity(id) {
    const connection = createConnection(); // Créer une nouvelle connexion
    return new Promise((resolve, reject) => {
        connection.connect((err) => {
            if (err) {
                reject('Erreur lors de la connexion à la base de données : ' + err.stack);
                return;
            }
            const deleteQuery = `DELETE FROM ws_entities WHERE id=?`;
            connection.execute(deleteQuery, [id], (error, results, fields) => {
                if (error) {
                    reject('Erreur lors de la suppression de l\'enregistrement dans ws_entities : ' + error.message);
                    return;
                }
                resolve('Enregistrement supprimé avec succès dans ws_entities.');
                connection.end(); // Fermer la connexion après l'opération
            });
        });
    });
}

// Test de création d'un masque
//console.log('Test de création d\'un masque...');
//createMask('MasqueTest', 'Description du masque test', '{"key": "value"}').then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// Test de lecture de tous les masques
//console.log('Test de lecture de tous les masques...');
//readMasks().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// Test de mise à jour d'un masque (supposons que l'ID 1 existe)
//console.log('Test de mise à jour d\'un masque...');
//updateMask(15, 'MasqueTestModifié', 'Description modifiée du masque test', '{"updated_key": "updated_value"}').then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// Test de suppression d'un masque (supposons que l'ID 1 existe)
//console.log('Test de suppression d\'un masque...');
//deleteMask(15).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// Test de création d'une entité
//console.log('Test de création d\'une entité...');
//createEntity(1, '{"entity_key": "entity_value"}').then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// Test de lecture de toutes les entités
console.log('Test de lecture de toutes les entités...');
readEntities().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// Test de mise à jour d'une entité (supposons que l'ID 1 existe)
//console.log('Test de mise à jour d\'une entité...');
//updateEntity(11, 2, '{"updated_entity_key": "updated_entity_value"}').then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

// Test de suppression d'une entité (supposons que l'ID 1 existe)
//console.log('Test de suppression d\'une entité...');
//deleteEntity(11).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

module.exports = { createMask, readMasks, updateMask, deleteMask, createEntity, readEntities, updateEntity, deleteEntity };
