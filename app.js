//Importar o módulo express

const express = require('express');

//Importar express-handlebars

const { engine } = require('express-handlebars');

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

//configuração do express-handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

//Rota principal

app.get('/', function(req,res){
   res.render('formulario');
});

//servidor

app.listen(8080);