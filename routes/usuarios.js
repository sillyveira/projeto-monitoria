const express = require("express");
const router = express.Router();
const validarNome = require("../middlewares/validarNome");
const controladorUsuario = require("../controllers/usuarios");
const Usuario = require("../models/Usuario");

router.get("/", async (req, res) => {
  const users = await Usuario.find();
  res.status(200).json(users);
});

module.exports = router;
