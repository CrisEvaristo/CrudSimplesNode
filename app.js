//Importar o módulo express

const express = require('express');

//importar mysql
const mysql = require('mysql2');

//configuração
const conexao = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'projectonode'
});
//teste de conexão

conexao.connect( function(erro){
    if(erro)throw erro;
    console.log('conexao efectuada');
});

//app

const app = express();

//Rota ola mundo

app.get('/', function(req,res){
    res.write("Utilizando nodermon");
    res.end();
});

//servidor

app.listen(8080);