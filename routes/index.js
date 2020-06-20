userController = require('../controller/user-controller');
movieController = require('../controller/movie-controller');

module.exports = (server) => {
    //CLIENT
    server.get('/', function(request, response){
        response.sendfile('client/home.html');
    });
    server.get('/users-page', function(request, response){
        response.sendfile('client/users.html');
    });
    server.get('/movie/update/:id', function(request, response){
        response.sendfile('client/movie-update.html');
    });
    //API
    server.get("/users", userController.readAll);
    server.get("/user/:id", userController.read);
    server.post("/user", userController.create);
    server.delete("/user/:id", userController.delete);

    server.get("/movies", movieController.readAll);
    server.get("/movie/:id", movieController.read);
    server.post("/movie", movieController.create);
    server.delete("/movie/:id", movieController.delete);
    server.post("/movie/search",movieController.search);
    server.put("/movie/:id/update", movieController.update);
}