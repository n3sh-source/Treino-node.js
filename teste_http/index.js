const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const Sequelize = require('sequelize');

//Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

    //Conexão BD SQL
        const sequelize = new Sequelize('teste', 'root', 'root', {
            host: 'localhost',
            dialect: 'mysql'
        });
        
app.listen(8081, function(){
    console.log('Server ON');
});