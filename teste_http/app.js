var http = require('http');

http.createServer(function (req, res){
    res.end('Oi');
    
}).listen(8081);

console.log('Servidor ON');