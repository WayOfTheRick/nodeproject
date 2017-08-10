var express = require("express");
var app = express();

var port = process.env.PORT; //normally var port = 5000;

app.use(express.static('public')); 
//tells express that public is a static directory and to 
//look first in that directory for requested resources
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

//if the resource is not found then use the remaining request handlers to satisfy the request
//all of our bootstrat resources are in the public directiry so this should work well for us
app.get('/', function(req, res){
    res.send('Hey amigos!');
})

app.get('/routing', function(req, res){
    res.send('Hey routing!');
})

app.listen(port, function(err){
    console.log('the server is running on port ' + port);
})



