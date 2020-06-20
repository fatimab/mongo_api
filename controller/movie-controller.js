const mongoose = require ('mongoose');
const Movie = require('../models/movies');
module.exports = {
   readAll(req, res) 
    {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        Movie.find(function(err, movies){
            res.json(movies);
        })
    },
    read(req, res)
    {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        Movie.findById(req.params.id, function(err, movie){
            res.json(movie);
        })
       
    },
    create(req, res){
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        const body = req.body;
        let movie = new Movie();
        movie.title = body.title;
        movie.duration = body.duration;
        console.log(body);
        movie.save(res.send("OK"));
    },
    delete(req, res){
        //res.header('Access-Control-Allow-Origin', 'http://localhost:8050');

        Movie.remove({_id: req.params.id}, function(err, movie){
            res.json({msg: "Ben supprimé"});
        })
    },
    search(req, res){
        Movie.findOne({title: req.body.title}, function(err, movie){
            res.json(movie);
        });
    },
    update(req, res){
        data = {
            duration: req.body.duration,
            title: req.body.title
        };
        Movie.findByIdAndUpdate(req.params.id, data, function(err, movie){
            if(err) console.log(err);
            res.send('success'+movie);
        })
    }
}