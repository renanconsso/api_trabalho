const usuarioRepository = require('../repository/usuario_repository');

async function listar() {
    const usuarios = await usuarioRepository.listar();
    if (!usuarios || usuarios.length === 0) {
        throw new Error("Nenhum usuário encontrado.");
    }

    // Adicionar filmes vinculados a cada usuário
    for (let usuario of usuarios) {
        usuario.filmes = await usuarioRepository.buscarFilmes(usuario.id);
    }

    return usuarios;
}
async function cadastrar(usuario) {
    if (!usuario.nome || !usuario.matricula || !usuario.telefone) {
        throw new Error("Dados incompletos para cadastro.");
    }

    // Remover a referência à senha, pois não é mais usada
    return await usuarioRepository.cadastrar(usuario);
}

module.exports = {
    listar,
    cadastrar
};
