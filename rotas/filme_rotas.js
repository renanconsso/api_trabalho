const express = require('express');
const router = express.Router();

const filmeController = require('../controller/filme_controller');

router.get("/", filmeController.listar);
router.post("/", filmeController.inserir);
router.post("/deletar/:id", filmeController.deletarPorId);
router.put("/atualizar/:id", filmeController.atualizarFilme);
router.put("/retirar/", filmeController.retirarFilme);
router.put("/devolver/", filmeController.devolverFilme);

module.exports = router;
