const express = require("express");
const router = express.Router();
const Evento = require("../models/Evento");
const { createEvento, getEventos } = require("../controllers/eventos");


router.get("/", async (req, res) => {
  const eventos = await getEventos()
  res.status(200).json(eventos);
});

router.post("/adicionar-evento", async (req, res) => {
  const { nome, horario } = req.body;
  await createEvento(nome, horario);
  res.status(200).json({ body: `O evento ${nome} foi criado com sucesso.` });
});


module.exports = router;