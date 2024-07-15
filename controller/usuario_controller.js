const services = require('../services/usuario_service');

function listar(req, res) {
    res.json(services.listar());
}

function inserir(req, res) {
    let usuario = req.body;
    
    try {
        const usuarioInserido = services.cadastrarUsuarioService(usuario);
        res.status(201).json(usuarioInserido);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }    
}

function buscarPorId(req, res) {
    const id = +req.params.id;    
    try {
        const usuarioComId = services.buscarUsuarioService(id);
        res.json(usuarioComId);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }        
}

module.exports = {
    listar,
    inserir,
    buscarPorId
};
