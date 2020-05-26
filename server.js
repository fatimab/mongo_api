const routes = require('./routes/index');
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

server.use(bodyParser.json());
routes(server);

server.listen(3050, () => {
        console.log("Ecoute sur le port 3050");
        mongoose.connect('mongodb://fatimabc:azerty@localhost/mongo_api',{
                useMongoClient: true,
        });
        mongoose.connection
        .once('open',() => console.log("Conexion mongoDb ok"))
        .on('error', (error) => {
                console.warn('Warning', error);
        });
});
