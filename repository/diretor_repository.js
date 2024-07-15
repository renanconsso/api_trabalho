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

function listarDiretores() {
    return diretores;
}

function deletarDiretor(id) {
    const diretorIndex = diretores.findIndex(diretor => diretor.id == id);
    if (diretorIndex !== -1) {
        diretores.splice(diretorIndex, 1);
    }
    return diretores;
}

module.exports = {
    cadastrarDiretor,
    localizarDiretor,
    listarDiretores,
    deletarDiretor,
    diretores
};
