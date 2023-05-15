const mongoose = require('mongoose');
const jsonwebtoken = require('jsonwebtoken');

const User = require('../../Schemas/User');

async function Logar(body){
//recebe os dados do usuario
const email = boby.email;
const senha = boby.senha;

// verifica os dados 
if(!email || !senha) {
    return { erro: 'Dados insuficientes.'}
}

//busca o usuario no banco
Find = await User.find({email, senha})
    .then(response => {
        return response
    }).catch(erro => {
        return{erro: erro }
    })
//verifica se encontrou
if (Find == '' || Find.erro) {
    return {erro : 'E-mail ou senha incorretos.'}
}
// se encontrou, gera o token
Token = await jsonwebtoken.sign({
    id: Find[0]._id,
    nome: Find[0].nome,
    email: Find[0].email,
   },   'SenhaParaProtegerOToken')

//salva o token nos cookies do navegador
res.cookie('Token', Token)
res.sendStatus(200)

}

module.exports = Logar;