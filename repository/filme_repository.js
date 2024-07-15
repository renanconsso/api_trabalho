const diretorRepository = require('../repository/diretor_repository');
const userRepository = require('../repository/usuario_repository');

let idGeradorFilmes = 3;

const filmes = [
    {
        id: 0,
        nome: "A Insustentável Leveza de Ser",
        diretores: ["Ivonei Marques", "Luis Henrique Ries"],
        ano: 1972,
        disponivel: true
    },
    {
        id: 1,
        nome: "Histórias de Mãozinha",
        diretores: ["Mãozinha"],
        ano: 2024,
        disponivel: true
    }
];

function cadastrarFilme(filme){
    filme.id = ++idGeradorFilmes;
    filmes.push(filme);
    return filme;
}

function retirarFilme(idUser, idFilme){
    const filme = filmes.find(f => f.id == idFilme);
    const user = userRepository.usuarios.find(u => u.id == idUser);
    filme.disponivel = false;
    const dataEntrega = new Date();
    dataEntrega.setDate(dataEntrega.getDate() + 5);
    filme.dataEntrega = dataEntrega;
    user.filmes.push(filme);
    return user;
}

function devolverFilme(idUser, idFilme){
    const filme = filmes.find(f => f.id == idFilme);
    const user = userRepository.usuarios.find(u => u.id == idUser);
    filme.disponivel = true;
    filme.dataEntrega = null;
    user.filmes = user.filmes.filter(f => f.id !== filme.id);
    return user;
}

function buscar(atributo, condicao){
    const listaRetornada = filmes.filter(filme => filme[atributo] == condicao);
    return listaRetornada;
}

function listar() {
    return filmes;
}

function deletar(id) {
    const filmeDeletado = filmes.findIndex(filme => filme.id == id);
    if (filmeDeletado !== -1) {
        filmes.splice(filmeDeletado, 1);
    }
    return filmes;
}

function atualizar(id, atributo, atualizacao) {
    const filmeSelecionado = filmes.find(filme => filme.id == id);
    if (filmeSelecionado) {
        filmeSelecionado[atributo] = atualizacao;
    }
    return filmes;
}

module.exports = {
    buscar,
    devolverFilme,
    retirarFilme,
    cadastrarFilme,
    filmes,
    listar,
    deletar,
    atualizar
};
