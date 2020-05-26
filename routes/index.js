userController = require('../controller/user-controller');
movieController = require('../controller/movie-controller');

module.exports = (server) => {
    server.get("/users", userController.readAll);
    server.get("/user/:id", userController.read);
    server.post("/user", userController.create);
    server.delete("/user/:id", userController.delete);

    server.get("/movies", movieController.readAll);
    server.get("/movie/:id", movieController.read);
    server.post("/movie", movieController.create);
    server.delete("/movie/:id", movieController.delete);
}