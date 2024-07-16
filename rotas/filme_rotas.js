const express = require('express');
const router = express.Router();

const filmeController = require('../controller/filme_controller'); // Importei o controller

router.get("/", filmeController.listar); // Rota para função listar (metodo GET)
router.post("/", filmeController.inserir); // Rota para função inserir (metodo POST)
router.post("/deletar/:id", filmeController.deletarPorId); // Rota para função Deletar (metodo POST)
router.put("/atualizar/:id", filmeController.atualizarFilme); // Rota para função atualizar (metodo PUT)
router.put("/retirar/", filmeController.retirarFilme); // Rota para função Retirar Filme (metodo PUT)
router.put("/devolver/", filmeController.devolverFilme);// Rota para função Devolver Filme (metodo PUT)

module.exports = router;
