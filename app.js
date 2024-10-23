//Importar o módulo express

const express = require('express');

//app

const app = express();

//Rota ola mundo

app.get('/', function(req,res){
    res.write("Utilizando nodermon");
    res.end();
});

//servidor

app.listen(8080);