const express = require('express');
const router = express.Router();
const filmeController = require('../controller/filme_controller');

router.get('/', filmeController.listar);
router.post('/', filmeController.cadastrarFilme);
router.post('/retirar', filmeController.retirarFilme);
router.post('/devolver', filmeController.devolverFilme);
router.get('/buscar', filmeController.buscarFilme);
router.delete('/:id', filmeController.deletarFilme);
router.put('/:id', filmeController.atualizar);

module.exports = router;
