const express = require('express');
const server = express();

server.get('/', function(request, response){
    response.sendfile('./home.html');
    response.header('Access-Control-Allow-Origin', request.headers.origin);

});
server.get('/users', function(request, response){
    response.sendfile('./users.html');
});

server.listen(8050);
