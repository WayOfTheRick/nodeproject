var express = require("express");
var app = express();

var port = process.env.PORT; //normally var port = 5000;

app.get('/', function(req, res){
    res.send('Hey amigos!');
})

app.get('/routing', function(req, res){
    res.send('Hey routing!');
})

app.listen(port, function(err){
    console.log('the server is running on port ' + port);
})



