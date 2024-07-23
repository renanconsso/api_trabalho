// diretor_service.js
const diretorRepository = require('../repository/diretor_repository');
const filmeRepository = require('../repository/filme_repository');

async function listar() {
    let dados = await diretorRepository.listar();
    if (dados.length > 0) {
        return dados;
    } else {
        throw new Error("Dados vazios.");
    }
}

async function cadastrarDiretorService(diretor) {
    const { nome, nacionalidade } = diretor;

    if (!nome || !nacionalidade) {
        throw new Error("Os campos nome e nacionalidade são obrigatórios.");
    }

    return await diretorRepository.cadastrarDiretor(diretor);
}


async function deletarDiretorService(idDeletado) {
    try {
        const diretores = await diretorRepository.listar();
        console.log('Diretores:', diretores); // Verifique o conteúdo
        const diretorDeletado = diretores.find(diretor => diretor.id == idDeletado);
        if (diretorDeletado) {
            const filmes = await filmeRepository.listar();
            console.log('Filmes:', filmes); // Verifique o conteúdo
            
            const diretorEncontrado = filmes.some(filme => filme.diretores.includes(diretorDeletado.nome));
            
            if (diretorEncontrado) {
                throw new Error("O diretor não pode ser deletado, pois ele ainda possui filmes cadastrados em seu nome.");
            } else {
                await diretorRepository.deletar(idDeletado);
                return;
            }
        } else {
            throw new Error("ID fornecido não foi localizado.");
        }
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}


module.exports = {
    listar,
    cadastrarDiretorService,
    deletarDiretorService
};
