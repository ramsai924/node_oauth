var auth = require('express').Router();
var passport = require('passport');

auth.get('/login' , function(req,res){
    res.send("logging in");
})

auth.get('/logout' , function(req,res){
    res.send("logging out");
})

auth.get('/google' ,passport.authenticate('google', {
    scope: ['profile']
}));

auth.get('/google/redirect', passport.authenticate('google'), function(req,res){
    res.send('You reached callback');
})

module.exports = auth;