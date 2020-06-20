const mongoose = require ('mongoose');
const User = require('../models/users');
module.exports = {
   readAll(req, res) 
    {
        User.find(function(err, users){
            res.json(users);
        })
    },
    read(req, res)
    {
        User.findById(req.params.id, function(err, user){
            res.json(user);
        })
       
    },
    create(req, res){
        const body = req.body;
        let user = new User();
        user.name = body.name;
        console.log(body);
        user.save(res.send("OK"));
    },
    delete(req, res){
        User.remove({_id: req.params.id}, function(err, user){
            res.json({msg: "Ben supprimé"});
        })
    },
}