let idGeradorUsuarios = 3;

const usuarios = [
    {
        id: 1,
        nome: "breno",
        senha: "maozinha",
        matricula: 1,
        telefone: 51991694290,
        filmes: []
    }
];

function buscar(atributo, condicao){
    const listaRetornada = usuarios.filter(usuario => usuario[atributo] == condicao);
    return listaRetornada;
}

function localizarUsuario(inputUsuario){
    const usuario = usuarios.find(u => u.nome.toLowerCase() === inputUsuario.toLowerCase());
    return usuario;
}

function validarSenha(inputSenha, usuario){
    if(usuario.senha === inputSenha){
        return true;
    }
    return false;
}

function cadastrarUsuario(usuario){
    usuario.id = ++idGeradorUsuarios;
    usuarios.push(usuario);
    return usuario;
}

function listar() {
    return usuarios;
}

module.exports = {
    cadastrarUsuario,
    localizarUsuario,
    validarSenha,
    usuarios,
    listar,
    buscar
};
