const {MongoClient, ObjectId} = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://jamilabdelhamid:fZBjp2Ai8pbuC6WH@cluster0.wxlpufx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

// Fonction pour créer un masque
async function createMask(id, name, description, mask_json) {
    try {

        const dbo = client.db("mydb");
        const ws_masks = dbo.collection("ws_masks");
        const document = {_id: id, name: name, description: description, mask_json: mask_json}; // Créer le document à partir des paramètres name et age
        await ws_masks.insertOne(document);
        return ('Enregistrement créé avec succès dans ws_masks.');
    } catch (error) {
        await client.close();
        return('Erreur lors de la création de l\'enregistrement dans ws_masks : ' + error);

    }
}

// Fonction pour lire tous les masques
async function readMasks() {
    try {

        const dbo = client.db("mydb");
        const ws_masks = dbo.collection("ws_masks");
        const results = await ws_masks.find().toArray();
        // Print returned documents
        return ('Enregistrements lus avec succès dans ws_masks : '  + '\n' + JSON.stringify(results));

    } catch (error) {
        await client.close();
        return('Erreur lors de la lecture des enregistrements dans ws_masks : ' + error);

    }
}

// Fonction pour mettre à jour un masque
async function updateMask(id, name, description, mask_json) {
    try {
        const dbo = client.db("mydb");
        const ws_masks = dbo.collection("ws_masks");
        const filter = {_id: id};
        const updateMask = {
            $set: {
                name: name,
                description: description,
                mask_json: mask_json
            },
        };
        await ws_masks.updateOne(filter, updateMask);
        return('Enregistrement mis à jour avec succès dans ws_masks.');
    } catch (error) {
        await client.close();
        return('Erreur lors de la mise à jour de l\'enregistrement dans ws_masks : ' +  error);

    }
}

// Fonction pour supprimer un masque
async function deleteMask(id) {
    try {
        const dbo = client.db("mydb");
        const ws_masks = dbo.collection("ws_masks");
        await ws_masks.deleteOne({_id: id})
        return ('Enregistrement supprimé avec succès dans ws_masks.');
    } catch (error) {
        await client.close();
        return('Erreur lors de la mise à jour de l\'enregistrement dans ws_masks : ' +  error);
    }
}

// Fonction pour créer une entrée
async function createEntry(id, id_mask, entry_json) {
    try {
        const dbo = client.db("mydb");
        const ws_entries = dbo.collection("ws_entries");
        const document = {_id: id, id_mask: id_mask, entry_json: entry_json}; // Créer le document
        await ws_entries.insertOne(document);
        return('Enregistrement créé avec succès dans ws_entries.');
    } catch (error) {
        await client.close();
        return('Erreur lors de la mise à jour de l\'enregistrement dans ws_masks : ' + error);
    }
}

// Fonction pour lire toutes les entrées
async function readEntries() {
    try {
        const dbo = client.db("mydb");
        const ws_entries = dbo.collection("ws_entries");
        const results = await ws_entries.find().toArray();
        // Print returned documents
        return ('Enregistrements lus avec succès dans ws_masks : '  + '\n' + JSON.stringify(results));
    } catch (error) {
        await client.close();
        return('Erreur lors de la mise à jour de l\'enregistrement dans ws_masks : ' + error);
    }
}

// Fonction pour mettre à jour une entrée
async function updateEntry(id, id_mask, entry_json) {
    try {
        const dbo = client.db("mydb");
        const ws_entries = dbo.collection("ws_entries");
        const filter = {_id: id};
        const updateEntry = {
            $set: {
                id_mask: id_mask,
                entry_json: entry_json
            },
        };
        await ws_entries.updateOne(filter, updateEntry);
        return('Enregistrement mis à jour avec succès dans ws_entries.');
    } catch (error) {
        await client.close();
        return('Erreur lors de la mise à jour de l\'enregistrement dans ws_masks : ' + error);
    }
}

// Fonction pour supprimer une entrée
async function deleteEntry(id) {
    try {
        const dbo = client.db("mydb");
        const ws_entries = dbo.collection("ws_entries");
        await ws_entries.deleteOne({_id: id})
        return('Enregistrement supprimé avec succès dans ws_entries.');
    } catch (error) {
        return('Erreur lors de la mise à jour de l\'enregistrement dans ws_masks : ' + error);
    }
}

async function crud() {
    try {
        await client.connect();
        console.log("Vous êtes connecté à la base de données!");

        // Test de création d'un masque
        console.log('Test de création d\'un masque...');
        await createMask(new ObjectId('66095986d3b64bcf3a4250c4'), 'Masque', 'Description du masque', '{"key": "value"}').then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

        // Test de lecture de tous les masques
        //console.log('Test de lecture de tous les masques...');
        //await readMasks().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

        // Test de mise à jour d'un masque (supposons que l'ObjectID 66095986d3b64bcf3a4250c4 existe)
      //  console.log('Test de mise à jour d\'un masque...');
     //  await updateMask(new ObjectId('66095986d3b64bcf3a4250c4'), 'MasqueModifié', 'Description modifiée du masque', '{"updated_keymask": "updated_valuemask"}').then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

        // Test de suppression d'un masque (supposons que l'ObjectID 66095986d3b64bcf3a4250c4 existe)
     //  console.log('Test de suppression d\'un masque...');
    //   await deleteMask(new ObjectId('66095986d3b64bcf3a4250c4')).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

                // Test de création d'une entrée
            //   console.log('Test de création d\'une entrée...');
           //    await createEntry(new ObjectId('66097c9ab63303ca692cf316'), new ObjectId('66095986d3b64bcf3a4250c4'), '{"entry_key": "entry_value"}').then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

                // Test de lecture de toutes les entrées
              //  console.log('Test de lecture de toutes les entrées...');
              // await readEntries().then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

                // Test de mise à jour d'une entrée (supposons que l'ID 66097c9ab63303ca692cf316 existe)
              //  console.log('Test de mise à jour d\'une entrée...');
             //   await updateEntry(new ObjectId('66097c9ab63303ca692cf316'), new ObjectId('66095986d3b64bcf3a4250c4'), '{"updated_entry_key": "updated_entry_value"}').then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});

                // Test de suppression d'une entrée (supposons que l'ID 66097c9ab63303ca692cf316 existe)
             //   console.log('Test de suppression d\'une entrée...');
              //  await deleteEntry(new ObjectId('66097c9ab63303ca692cf316')).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)});
    } catch (err) {
        return("Erreur de connexion à la base de données : " + err);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

crud().catch(console.dir);

 











  