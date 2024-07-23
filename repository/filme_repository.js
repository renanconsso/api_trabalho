const db = require('../db');

async function listar() {
    const res = await db.query('SELECT * FROM filmes');
    return res.rows;
}

async function cadastrar(filme) {
    const { nome, ano, diretores } = filme;

    // Verificar se todos os diretores existem
    for (const diretor of diretores) {
        const res = await db.query('SELECT * FROM diretores WHERE id = $1', [diretor]);
        if (res.rows.length === 0) {
            throw new Error(`Diretor com ID ${diretor} não encontrado.`);
        }
    }

    const res = await db.query(
        'INSERT INTO filmes (nome, ano, diretores, disponivel, dataentrega) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [nome, ano, diretores, true, null]
    );
    return res.rows[0];
}

async function retirar(idUsuario, idFilme) {
    if (!idUsuario || !idFilme) {
        throw new Error("ID do usuário e ID do filme são necessários.");
    }
    await db.query(
        'INSERT INTO retiradas (id_usuario, id_filme) VALUES ($1, $2)',
        [idUsuario, idFilme]
    );
}

async function devolver(idUsuario, idFilme) {
    if (!idUsuario || !idFilme) {
        throw new Error("ID do usuário e ID do filme são necessários.");
    }
    await db.query(
        'DELETE FROM retiradas WHERE id_usuario = $1 AND id_filme = $2',
        [idUsuario, idFilme]
    );
}

async function buscarRetiradas(idUsuario) {
    const res = await db.query(
        'SELECT * FROM retiradas WHERE id_usuario = $1',
        [idUsuario]
    );
    return res.rows;
}

async function buscarRetirada(idUsuario, idFilme) {
    const res = await db.query(
        'SELECT * FROM retiradas WHERE id_usuario = $1 AND id_filme = $2',
        [idUsuario, idFilme]
    );
    return res.rows;
}


async function buscar(atributo, condicao) {
    const res = await db.query(`SELECT * FROM filmes WHERE ${atributo} = $1`, [condicao]);
    return res.rows;
}

async function deletar(id) {
    await db.query('DELETE FROM filmes WHERE id = $1', [id]);
}

async function atualizar(id, atributo, atualizacao) {
    const res = await db.query(`UPDATE filmes SET ${atributo} = $1 WHERE id = $2 RETURNING *`, [atualizacao, id]);
    return res.rows[0];
}

module.exports = {
    listar,
    cadastrar,
    retirar,
    devolver,
    buscar,
    deletar,
    atualizar,
    buscarRetirada,
    buscarRetiradas
};
