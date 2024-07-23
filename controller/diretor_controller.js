const services = require('../services/diretor_service');

async function listar(req, res) {
    try {
        const dados = await services.listar();
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function cadastrarDiretor(req, res) {
    let diretor = req.body;

    try {
        await services.cadastrarDiretorService(diretor);
        res.status(201).json({ message: "Diretor cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function deletarDiretor(req, res) {
    let id = req.params.id;

    try {
        await services.deletarDiretorService(id);
        res.status(201).json({ message: "Diretor deletado com sucesso." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listar,
    cadastrarDiretor,
    deletarDiretor
};
