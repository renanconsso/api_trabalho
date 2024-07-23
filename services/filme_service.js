const filmeRepository = require('../repository/filme_repository');

async function listar() {
    const filmes = await filmeRepository.listar();
    if (!filmes || filmes.length === 0) {
        throw new Error("Nenhum filme encontrado.");
    }
    return filmes;
}

async function cadastrar(filme) {
    if (!filme.nome || !filme.ano || !filme.diretores) {
        throw new Error("Dados incompletos para cadastro.");
    }
    return await filmeRepository.cadastrar(filme);
}

async function retirar(idUsuario, idFilme) {
    if (!idUsuario || !idFilme) {
        throw new Error("ID do usuário e ID do filme são necessários.");
    }

    const filme = await filmeRepository.buscar('id', idFilme);
    if (filme.length === 0) {
        throw new Error("Filme não encontrado.");
    }
    if (!filme[0].disponivel) {
        throw new Error("Filme não está disponível para retirada.");
    }

    const retiradas = await filmeRepository.buscarRetiradas(idUsuario);
    if (retiradas.length >= 3) {
        throw new Error("O usuário já retirou o máximo de filmes permitido.");
    }

    await filmeRepository.atualizar(idFilme, 'disponivel', false);
    await filmeRepository.retirar(idUsuario, idFilme);
}


async function devolver(idUsuario, idFilme) {
    if (!idUsuario || !idFilme) {
        throw new Error("ID do usuário e ID do filme são necessários.");
    }
    const retirada = await filmeRepository.buscarRetirada(idUsuario, idFilme);
    if (retirada.length === 0) {
        throw new Error("Retirada não encontrada.");
    }
    await filmeRepository.atualizar(idFilme, 'disponivel', true);
    await filmeRepository.devolver(idUsuario, idFilme);
}

async function buscar(atributo, condicao) {
    if (!atributo || !condicao) {
        throw new Error("Dados incompletos para busca.");
    }
    return await filmeRepository.buscar(atributo, condicao);
}

async function deletar(id) {
    if (!id) {
        throw new Error("ID não fornecido para deletar.");
    }
    await filmeRepository.deletar(id);
}

async function atualizar(id, atributo, atualizacao) {
    if (!id || !atributo || !atualizacao) {
        throw new Error("Dados incompletos para atualização.");
    }
    return await filmeRepository.atualizar(id, atributo, atualizacao);
}

module.exports = {
    listar,
    cadastrar,
    retirar,
    devolver,
    buscar,
    deletar,
    atualizar
};
