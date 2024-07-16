const express = require('express');
const router = express.Router();

const diretorController = require('../controller/diretor_controller'); // Importando Controller

router.get("/", diretorController.listar); // Rota para função Listar (Metodo GET)
router.post("/", diretorController.cadastrarDiretor); // Rota para função Cadastrar (Metodo POST)
router.post("/deletar/:id", diretorController.deletarDiretor); // Rota para função Deletar (Metodo POST)

module.exports = router;
