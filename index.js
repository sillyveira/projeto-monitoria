const express = require('express');
const app = express();
const rotaUsuarios = require('./routes/usuarios');
require('dotenv').config();
const {conectarMongo} = require('./models/database')

app.use(express.json());
app.use('/usuarios', rotaUsuarios);

conectarMongo();

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
});
