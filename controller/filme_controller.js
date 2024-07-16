const services = require('../services/filme_service'); // Import Services
//Tratamento de erros

function listar(req, res) {
    res.json(services.listar());
}

function inserir(req, res) {
    let filme = req.body;
    
    try {
        const filmeInserido = services.cadastrarFilmeService(filme);
        res.status(201).json({ message: "Filme inserido com sucesso na plataforma." });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }    
};

function retirarFilme(req, res) {
    const { usuarioId, filmeId } = req.body;

    try {
        const filmeRetirado = services.retirarFilmeService(usuarioId, filmeId);
        res.status(200).json({ message: "Filme retirado com sucesso." });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

function deletarPorId(req, res) {
    const id = req.params.id
    try {
        services.deletarFilmeService(id);
        res.json("Filme excluído.");
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

function atualizarFilme(req, res) {
    const id = req.params.id;
    const { atributo, condicao } = req.body;

    try {
        const filmeAtualizado = services.atualizarService(atributo, condicao, id);
        res.json({ message: "Filme atualizado!", filme: filmeAtualizado });
    } catch(err) {
        res.status(400).json({ error: err.message });
    }
};


function devolverFilme(req, res) {
    const { usuarioId, filmeId } = req.body;

    try {
        services.devolverFilmeService(usuarioId, filmeId);
        res.status(201).json({ message: "O filme foi retornado." });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    listar,
    inserir,
    deletarPorId,
    atualizarFilme,
    retirarFilme,
    devolverFilme
};
