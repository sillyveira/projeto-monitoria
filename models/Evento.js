const mongoose = require('mongoose');

const eventoSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
        unique: true
    },
    horario: {
        type: Date,
        default: Date.now,
        required: true
    }
})

module.exports = mongoose.model('Evento', eventoSchema, 'eventos');