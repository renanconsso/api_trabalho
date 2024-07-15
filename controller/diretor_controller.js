const services = require('../services/diretor_service');

function listar(req, res) {
    try {
        const dados = services.listar();
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

function cadastrarDiretor(req, res) {
    let diretor = req.body;

    try {
        services.cadastrarDiretorService(diretor);
        res.status(201).json({message: "Diretor cadastrado com sucesso!"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

function deletarDiretor(req, res) {
    let id = req.params.id;

    try {
        services.deletarDiretorService(id);
        res.status(201).json({message: "Diretor deletado com sucesso."});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

module.exports = {
    listar,
    cadastrarDiretor,
    deletarDiretor
};
