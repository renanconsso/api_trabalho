const filmeRepository = require('../repository/filme_repository'); // Importando o repositorio do filme
const usuarioRepository = require('../repository/usuario_repository'); // Importando o repositorio do usuario

//Validando dados de entrada
function autenticarUsuarioService(nome, senha) {
    const usuario = usuarioRepository.localizarUsuario(nome);
    if (!usuario) {
        throw new Error("Usuário não encontrado.");
    }

    const validacaoSenha = usuarioRepository.validarSenha(senha, usuario);
    if (!validacaoSenha) {
        throw new Error("Senha incorreta.");
    }

    console.log("Bem-vindo, " + usuario.nome);
    return usuario;
};

function cadastrarUsuarioService(usuario) {
    const { nome, senha, matricula, telefone } = usuario;

    if (!nome || !senha || !matricula || !telefone) {
        throw new Error("Os campos nome, senha, matricula e telefone são obrigatórios.");
    }

    usuario.filmes = [];
    console.log("Usuário cadastrado com sucesso!")
    return usuarioRepository.cadastrarUsuario(usuario);
};

function listar() {
    let dados = usuarioRepository.listar();
    if (dados) {
        return dados;
    } else {
        throw new Error("Dados vazios.");
    }
};

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
    const usuario = usuarioRepository.usuarios.find(u => u.id == usuarioId);
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
    } else if (["id", "nome", "ano"].includes(atributo)) {
        return filmeRepository.buscar(atributo, condicao);
    } else {
        throw new Error("Atributo de busca inválido.");
    }
};

function atualizarService(atributo, condicao, id) {
    if (["id", "nome", "ano"].includes(atributo)) {
        const listaAtualizada = filmeRepository.atualizar(id, atributo, condicao);
        if (listaAtualizada) {
            return listaAtualizada;
        } 
    } else {
        throw new Error("Não foi possível atualizar o filme.");
    }
};

module.exports = { 
    autenticarUsuarioService, 
    cadastrarUsuarioService,
    listar,
    cadastrarFilmeService,
    retirarFilmeService,
    devolverFilmeService,
    buscarFilmeService,
    deletarFilmeService,
    atualizarService
};
