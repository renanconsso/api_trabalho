// diretor_repository.js
const pool = require('../db');

async function listar() {
    const res = await pool.query('SELECT * FROM diretores');
    return res.rows;
}

async function cadastrarDiretor(diretor) {
    const res = await pool.query(
        'INSERT INTO diretores (nome, nacionalidade) VALUES ($1, $2) RETURNING *',
        [diretor.nome, diretor.nacionalidade]
    );
    return res.rows[0];
}

async function deletar(id) {
    await pool.query('DELETE FROM diretores WHERE id = $1', [id]);
}

module.exports = {
    listar,
    cadastrarDiretor,
    deletar
};
