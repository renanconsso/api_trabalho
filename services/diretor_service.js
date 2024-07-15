const diretorRepository = require('../repository/diretor_repository');
const filmeRepository = require('../repository/filme_repository');

function listar() {
    let dados = diretorRepository.listar();
    if (dados) {
        return dados;
    } else {
        throw new Error("Dados vazios.");
    }
};

function cadastrarDiretorService(diretor) {
    const { nome, nacionalidade } = diretor;

    if (!nome || !nacionalidade) {
        throw new Error("Os campos nome e nacionalidade são obrigatórios.");
    }

    console.log("Diretor cadastrado com sucesso.")
    return diretorRepository.cadastrarDiretor(diretor);
};

function deletarDiretorService(idDeletado) {
    const diretorDeletado = diretorRepository.diretores.find(diretor => diretor.id == idDeletado);
    if (diretorDeletado) {
        const diretorEncontrado = filmeRepository.filmes.some(filme => filme.diretor.includes(diretorDeletado.nome));
        if (diretorEncontrado) {
            throw new Error("O diretor não pode ser deletado, pois ele ainda possui filmes cadastrados em seu nome.");
        } else {
            diretorRepository.deletar(idDeletado);
            return;
        }
    } else {
        throw new Error("ID fornecido não foi localizado.");
    }
};

module.exports = { 
    deletarDiretorService,
    cadastrarDiretorService,
    listar
};
