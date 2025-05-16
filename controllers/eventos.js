const Evento = require("../models/Evento");

async function getEventos() {
    const eventos = await Evento.find({})
    return eventos;
}

async function createEvento(nome, horario){
    await Evento.create({
        nome,
        horario
    });
    return true;
}

module.exports = {
    getEventos, 
    createEvento
}