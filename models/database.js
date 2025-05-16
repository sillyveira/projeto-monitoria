require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

async function conectarMongo() {
    try {
        await mongoose.connect(uri);
        console.log('✅ Conectado ao MongoDB com sucesso')
    } catch (error) {
        console.log('❌ Erro ao conectar: ', error);
    }
}

module.exports = {
    conectarMongo
}