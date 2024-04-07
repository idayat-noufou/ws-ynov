const {MongoClient} = require("mongodb");

// Replace the uri string with your connection string.!
const uri = "mongodb+srv://jamilabdelhamid:fZBjp2Ai8pbuC6WH@cluster0.wxlpufx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function createMasks() {
    try {

        const dbo = client.db("mydb");
        await dbo.createCollection("ws_masks", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["_id", "name", "description", "mask_json"],
                    properties: {
                        _id: {bsonType: "objectId"},
                        name: {bsonType: "string"},
                        description: {bsonType: "string"},
                        mask_json: {bsonType: "string"}
                    }
                },
            }
        });
        console.log('La collection ws_masks a été créée avec succès.');
    } catch (err) {
        console.error("Erreur lors de la création de la collection 'ws_masks' : ", err)
        await client.close();
    }
}

async function createEntries() {
    try {

        const dbo = client.db("mydb");
        await dbo.createCollection("ws_entries", {
            validator: {
                $jsonSchema: {
                    bsonType: "object",
                    required: ["_id", "id_mask", "entry_json"],
                    properties: {
                        _id: {bsonType: "objectId"},
                        id_mask: {bsonType: "objectId"},
                        entry_json: {bsonType: "string"}
                    }
                },
            }
        });
        console.log('La collection ws_entries a été créée avec succès.');
    } catch (err) {
        console.error("Erreur lors de la création de la collection 'ws_entries' : ", err)
        await client.close();
    }
}

async function run() {
    try {
        await client.connect();
        await createMasks().catch(console.dir);
        await createEntries().catch(console.dir);
    } catch (err) {
        console.error("Erreur de connexion à la base de données : ", err);
    } finally {
        // Assurez-vous que le client se ferme lorsque vous avez terminé ou en cas d'erreur
        await client.close();
    }
}

run().catch(console.dir);