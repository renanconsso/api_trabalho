const express = require('express');
const app = express();
const PORTA = 3000;

const filmeRouter = require('./rotas/filme_rotas.js');
const usuarioRouter = require('./rotas/usuario_rotas.js');
const diretorRouter = require('./rotas/diretor_rotas.js');

app.use(express.json());

app.use("/filmes", filmeRouter);
app.use("/usuarios", usuarioRouter);
app.use("/diretores", diretorRouter);

app.listen(PORTA, ()=> {
    console.log("Iniciando o servidor na porta "+PORTA);
})