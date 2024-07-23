const db = require('../db');
const { buscar } = require('./filme_repository');

async function listar() {
    const res = await db.query('SELECT * FROM usuarios');
    return res.rows;
}

async function cadastrar(usuario) {
    const { nome, matricula, telefone } = usuario;
    const res = await db.query(
        'INSERT INTO usuarios (nome, matricula, telefone) VALUES ($1, $2, $3) RETURNING *',
        [nome, matricula, telefone]
    );
    return res.rows[0];
}

async function buscarFilmes(idUsuario) {
    const res = await db.query(
        'SELECT f.id, f.nome FROM filmes f ' +
        'JOIN retiradas r ON f.id = r.id_filme ' +
        'WHERE r.id_usuario = $1',
        [idUsuario]
    );
    return res.rows;
}
module.exports = {
    listar,
    cadastrar,
    buscarFilmes
};
