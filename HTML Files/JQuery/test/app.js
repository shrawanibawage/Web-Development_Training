var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.send('Welcome to express')
});
app.listen('3000',function(){
    console.log('server running in port 3000');
});
app.get('/login/:username',function(req,res){
    var username = req.params.username;
    res.send('welcome, ${username}');
});

app.get('/login/:username/:city',function(req,res){
    var params = req.params;
    res.send(params);
});
// app.get()

app.get('/loginUser', function(req,res){
    var uname = req.query.username;
    var ucity = req.query.city;
    var newuser = {username:uname,city:ucity}
    res.send(newuser);
});
// app.get()
app.get('/search/:choice',function(req,res){
    var cab = req.params.choice;
    res.send('your car choice is '+cab)
});
app.get('/searchCab/:choice/:type',function(req,res){
    var cab = req.params.choice;
    var cabtype = req.params.type;
    res.send('your car choice is ',cab+' with '+cabtype);
});
app.get('/searchCabs/:choice/:type/:price/:color/:condition',function(req,res){
    var cab = req.params;
    res.send(cab);
});
var bookList = require('./books.json');

app.get('/showBooks',function(req,res){
    res.send(bookList);
});