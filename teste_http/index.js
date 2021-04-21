const express = require('express');
const app = express();

app.get("/", function(req,res){
    res.send("You're Welcome");
});

app.get("/sobre", function(req, res){
    res.send("My about page");
});

app.get("/ola/:cargo/:nome", function(req, res){
    res.send("<h1>Bem vindo "+ req.params.nome+ "</h1>" + "<h2> Seu cargo: "+ req.params.cargo +"</h2>");
});

app.listen(8081, function(){
    console.log('Server ON');
});