const mongoose = require ('mongoose');
const Movie = require('../models/movies');
module.exports = {
   readAll(req, res) 
    {
        Movie.find(function(err, movies){
            res.json(movies);
        })
    },
    read(req, res)
    {
        Movie.findById(req.params.id, function(err, movie){
            res.json(movie);
        })
       
    },
    create(req, res){
        const body = req.body;
        let movie = new Movie();
        movie.title = body.title;
        movie.duration = body.duration;
        console.log(body);
        movie.save(res.send("OK"));
    },
    delete(req, res){
        Movie.remove({_id: req.params.id}, function(err, movie){
            res.json({msg: "Ben supprimé"});
        })
    }
}