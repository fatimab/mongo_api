const mongoose = require ('mongoose');
const User = require('../models/users');
module.exports = {
   readAll(req, res) 
    {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        User.find(function(err, users){
            res.json(users);
        })
    },
    read(req, res)
    {
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        User.findById(req.params.id, function(err, user){
            res.json(user);
        })
       
    },
    create(req, res){
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        const body = req.body;
        let user = new User();
        user.name = body.name;
        console.log(body);
        user.save(res.send("OK"));
    },
    delete(req, res){
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        User.remove({_id: req.params.id}, function(err, user){
            res.json({msg: "Ben supprimé"});
        })
    },
}