const express = require('express');
const router = express.Router();

const usuarioController = require('../controller/usuario_controller'); // importando o controller

router.get("/", usuarioController.listar); // Rota para função listar (metodo GET)
router.post("/", usuarioController.inserir); // Rota para função inserir (metodo POST)

module.exports = router;
