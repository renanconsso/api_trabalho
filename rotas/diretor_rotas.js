const express = require('express');
const router = express.Router();

const diretorController = require('../controller/diretor_controller');

router.get("/", diretorController.listar);
router.post("/", diretorController.cadastrarDiretor);
router.post("/deletar/:id", diretorController.deletarDiretor);

module.exports = router;
