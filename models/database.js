const {MongoClient} = require('mongodb');
require('dotenv').config();
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let db;

async function conectarMongo() {
    try {
        await client.connect();
        db = client.db();
        console.log('✅ Conectado ao MongoDB com sucesso')
    } catch (error) {
        console.log('❌ Erro ao conectar: ', error);
    }
}

function getDB(){
    if (!db) {
        throw new Error('Banco de dados não conectado.');
    } else {
        return db;
    }
}

module.exports = {
    conectarMongo,
    getDB
}