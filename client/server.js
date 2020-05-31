const express = require('express');
const server = express();

server.get('/', function(request, response){
    response.sendfile('./home.html');
});
server.get('/users', function(request, response){
    response.sendfile('./users.html');
});

server.listen(8050);
