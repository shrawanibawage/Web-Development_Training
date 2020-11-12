const { Server } = require('http');

var http = require('http');
var server = http.createServer(function(req,res){
    res.write("have a great day");
    console.log('Printing in browser');
    res.end();
    console.log('This will be printed last');
})
server.listen('3000');
console.log('this will be printed first');
console.log('server runnung in port 3000');