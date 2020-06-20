const routes = require('./routes/index');
const express = require('express');
const server = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cors = require('cors')


server.use(bodyParser.json());
server.use(cors());
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
