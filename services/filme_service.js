const filmeRepository = require('../repository/filme_repository'); // Importando Repositorio do filme
const usuarioRepository = require('../repository/usuario_repository'); // Importando Repositorio do Usuario

//Validando dados de entrada
function cadastrarFilmeService(filme) {
    const { id, nome, diretor, ano } = filme;

    if (!id || !nome || !diretor || !ano) {
        throw new Error("Todos os campos (id, nome, diretor, ano) são obrigatórios.");
    }

    filme.disponivel = true;
    console.log("Filme cadastrado com sucesso.")
    return filmeRepository.cadastrarFilme(filme);
};

function retirarFilmeService(usuarioId, filmeId) {
    const filme = filmeRepository.filmes.find(f => f.id == filmeId);
    const usuario = usuarioRepository.usuarios.find(u => u.id == usuarioId);
    
    if (!filme || filme.disponivel != true) {
        throw new Error("O filme não está disponível para retirada.");
    }

    if (!usuario || usuario.filmes.length >= 3) {
        throw new Error("O usuário já possui o máximo de filmes permitidos em empréstimo.");
    }

    return filmeRepository.retirarFilme(usuarioId, filmeId);
};

function listar() {
    let dados = filmeRepository.listar();
    if (dados) {
        return dados;
    } else {
        throw new Error("Dados vazios.");
    }
};

function deletarFilmeService(idDeletado) {
    const idFilmeDeletado = buscarFilmeService("id", idDeletado);
    if (idFilmeDeletado) {
        filmeRepository.deletar(idDeletado);
    } else {
        throw new Error("ID fornecido não foi localizado.");
    }
};

function devolverFilmeService(usuarioId, filmeId) {
    const filme = filmeRepository.filmes.find(f => f.id == filmeId);
    const usuario = usuarioRepository.usuarios.find(f => f.id == usuarioId);
    const filmeAlugado = usuario.filmes.find(f => f.id === filme.id);

    if (!filmeAlugado) {
        throw new Error("Este filme não está alugado para este usuário.");
    }

    const dataAtual = new Date();

    if (filmeAlugado.dataEntrega && filmeAlugado.dataEntrega < dataAtual) {
        const diferencaDias = Math.ceil((dataAtual - filmeAlugado.dataEntrega) / (1000 * 60 * 60 * 24));
        console.log(`Atenção: Você está devolvendo o filme com ${diferencaDias} dias de atraso.`);
    }

    return filmeRepository.devolverFilme(usuarioId, filmeId);
};

function buscarFilmeService(atributo, condicao) {
    if (atributo === "diretor") {
        const listaRetornada = filmeRepository.filmes.filter(filme => filme.diretor.includes(condicao));
        return listaRetornada;
    } else if (["id", "nome", "ano","diretores"].includes(atributo)) {
        return filmeRepository.buscar(atributo, condicao);
    } else {
        throw new Error("Atributo de busca inválido.");
    }
};

function atualizarService(atributo, condicao, id) {
    if (["id","nome", "ano","diretores"].includes(atributo)) {
        const listaAtualizada = filmeRepository.atualizar(id,atributo, condicao);
        if (listaAtualizada) {
            return listaAtualizada;
        } 
    } else {
        throw new Error("Não foi possível atualizar o filme.");
    }
};

module.exports = { 
    cadastrarFilmeService, 
    retirarFilmeService,
    devolverFilmeService, 
    listar,
    buscarFilmeService,
    deletarFilmeService,
    atualizarService
};
