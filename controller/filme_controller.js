const services = require('../services/filme_service');

async function listar(req, res) {
    try {
        const dados = await services.listar();
        res.json(dados);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function cadastrarFilme(req, res) {
    let filme = req.body;

    try {
        await services.cadastrar(filme);
        res.status(201).json({ message: "Filme cadastrado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function retirarFilme(req, res) {
    const { idUsuario, idFilme } = req.body;

    try {
        await services.retirar(idUsuario, idFilme);
        res.status(200).json({ message: "Filme retirado com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function devolverFilme(req, res) {
    const { idUsuario, idFilme } = req.body;

    try {
        await services.devolver(idUsuario, idFilme);
        res.status(200).json({ message: "Filme devolvido com sucesso!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
async function buscarFilme(req, res) {
    const { atributo, condicao } = req.query;

    try {
        const filmes = await services.buscar(atributo, condicao);
        res.json(filmes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function deletarFilme(req, res) {
    let id = req.params.id;

    try {
        await services.deletar(id);
        res.status(201).json({ message: "Filme deletado com sucesso." });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

async function atualizar(req, res) {
    const { id } = req.params;
    const { atributo, atualizacao } = req.body;

    try {
        const filmeAtualizado = await services.atualizar(id, atributo, atualizacao);
        res.json(filmeAtualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listar,
    cadastrarFilme,
    retirarFilme,
    devolverFilme,
    buscarFilme,
    deletarFilme,
    atualizar
};
