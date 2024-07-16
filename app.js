const express = require('express');
const app = express();
const PORTA = 3000; // iniciei na porta 3000 > Localhost:3000

// Importando Minhas Rotas
const filmeRouter = require('./rotas/filme_rotas.js'); 
const usuarioRouter = require('./rotas/usuario_rotas.js'); 
const diretorRouter = require('./rotas/diretor_rotas.js'); 

app.use(express.json());

// Caminhos para chamar cada Propriedade
app.use("/filmes", filmeRouter);
app.use("/usuarios", usuarioRouter);
app.use("/diretores", diretorRouter);

//Print para dizer a porta que o servidor foi iniciado..
app.listen(PORTA, ()=> {
    console.log("Iniciando o servidor na porta "+PORTA);
})