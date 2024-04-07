const {MongoClient} = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://jamilabdelhamid:fZBjp2Ai8pbuC6WH@cluster0.wxlpufx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
    try {
        await client.connect();
        console.log("Vous êtes connecté à la base de données!");
    } catch (err) {
        console.error("Erreur de connexion à la base de données : ", err);
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}

run().catch(console.dir);