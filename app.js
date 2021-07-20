var express = require('express');
var auths = require('./routes/app-routes');
var passportSetup = require('./config/passport-setup')
var app = express();


//setting view engine
app.set("view engine" , "ejs");

//using authos
app.use('/auth' , auths);

app.get("/" , function(req,res){
    res.render("home")
})

app.listen(5000 , function(){
    console.log('Listeing to port 5000');
})