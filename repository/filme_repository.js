const diretorRepository = require('../repository/diretor_repository');
const usuarioRepository = require('../repository/usuario_repository');

let idGeradorFilmes = 3;

const filmes = [
    {
        id: 0,
        nome: "007 GoldenEye",
        diretores: ["Martin Campbell"],
        ano: 1995,
        disponivel: true
    },
    {
        id: 1,
        nome: "60 segundos",
        diretores: ["Dominic Sena"],
        ano: 2000,
        disponivel: true
    }
];

//Funções...

function cadastrarFilme(filme){
    filme.id = ++idGeradorFilmes;
    filmes.push(filme);
    return filme;
}

function retirarFilme(idUsuario, idFilme){
    const filme = filmes.find(f => f.id == idFilme);
    const usuario = usuarioRepository.usuarios.find(f => f.id == idUsuario);
    filme.disponivel = false;
    const dataEntrega = new Date();
    dataEntrega.setDate(dataEntrega.getDate() + 5);
    filme.dataEntrega = dataEntrega;
    usuario.filmes.push(filme);
    return usuario;
}

function devolverFilme(idUsuario, idFilme){
    const filme = filmes.find(f => f.id == idFilme);
    const usuario = usuarioRepository.usuarios.find(f => f.id == idUsuario);
    filme.disponivel = true;
    filme.dataEntrega = null;
    usuario.filmes = usuario.filmes.filter(f => f.id !== filme.id);
    return usuario;
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
    filmeSelecionado[atributo] = atualizacao;
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
