const express = require("express");
const router = express.Router();
const validarNome = require("../middlewares/validarNome");
const controladorUsuario = require("../controllers/usuarios");
const { getDB } = require("../models/database");

router.get("/", async (req, res) => {
  const db = getDB();
  const collection = db.collection("usuarios");
  const users = await collection.find().toArray();
  res.status(200).json(users);
});

router.post("/adicionar-usuario", validarNome, async (req, res) => {
  const db = getDB();
  const collection = db.collection("usuarios");
  const { name } = req.body;
  await collection.insertOne({ nome: name });
  res.status(200).json({ body: "O usuário foi criado com sucesso." });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const resultado = controladorUsuario.atualizarUsuario(usuarios, id, name);

  if (resultado) {
    return res
      .status(200)
      .json({ body: "O usuário foi atualizado com sucesso." });
  } else {
    return res.status(404).json({ body: "Usuário não encontrado" });
  }
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const resultado = controladorUsuario.apagarUsuario(usuarios, id);
  if (resultado) {
    return res.status(200).json({ body: "O usuário foi apagado com sucesso." });
  } else {
    return res.status(404).json({ body: "Houve um erro" });
  }
});

module.exports = router;
