const services = require('../services/usuario_service');

async function listar(req, res) {
    try {
        const dados = await services.listar();
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function cadastrarUsuario(req, res) {
    let usuario = req.body;

    try {
        await services.cadastrar(usuario);
        res.status(201).json({ message: "Usuário cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listar,
    cadastrarUsuario
};
