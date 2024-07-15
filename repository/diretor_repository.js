let idGeradorDiretores = 3;

const diretores = [
    {
        id: 1,
        nome: "herbert richers",
        nacionalidade: "catalão"
    }
];

function localizarDiretor(inputDiretor){
    const diretor = diretores.find(d => d.nome.toLowerCase() === inputDiretor.toLowerCase());
    return diretor;
}

function cadastrarDiretor(diretor){
    diretor.id = ++idGeradorDiretores;
    diretores.push(diretor);
    return diretor;
}

function listar() {
    return diretores;
}

function deletar(id) {
    const diretorDeletado = diretores.findIndex(diretor => diretor.id == id);
    diretores.splice(diretorDeletado, 1);
    return diretores;
}

module.exports = {
    cadastrarDiretor,
    localizarDiretor,
    listar,
    deletar,
    diretores
};
