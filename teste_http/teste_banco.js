const Sequelize = require('sequelize');
const sequelize = new Sequelize('teste', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

// sequelize.authenticate().then(function(){
//     console.log('Conectado');
// }).catch(function(erro){
//     console.log('Falha ao se conectar ' + erro);
// })

//Criando uma Tabela
const postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING //Limitado
    },
    conteudo: {
        type: Sequelize.TEXT //Ilimitado
    }
});

// postagem.sync({force: true});

// postagem.create({
//     titulo: '<h1>',
//     conteudo: 'Nam ultricies massa velit, sed dictum mi ornare non. Praesent in magna nulla. Mauris quis rhoncus quam, sit amet euismod diam. Donec condimentum sed sapien eget bibendum. Fusce sed dolor blandit, pulvinar purus eget, semper tortor. Vestibulum nec laoreet elit, eu mollis purus. Pellentesque mollis porttitor massa. Interdum et malesuada fames ac ante ipsum primis in faucibus.'
// });

const usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

// usuario.sync({force: true});

usuario.create({
    nome: 'Gustavo',
    sobrenome: 'Silva',
    idade: 25,
    email: 'Teste@email.com'
});