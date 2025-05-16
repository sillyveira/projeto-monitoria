const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, 'O nome é obrigatório'],
        unique: [true, 'Já existe outro usuário com esse nome'],
        minlength: [6, 'O nome deve ter pelo menos 6 letras.'],
        maxlength: [15, 'O nome deve ter no máximo 15 letras'],
        trim: true
    },
    senha: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true,
        default: "usuario"
    },
    interesses: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        default: []
    }
})

module.exports = mongoose.model('Usuario', usuarioSchema, 'usuarios')