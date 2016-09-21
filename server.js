var express = require('express');
var app = express();
var nteractions = express();
var mongoose = require('mongoose');
var handlebars = require('express-handlebars');
var router = require('./router.js');
var nteractions_router = require('./nteractions_router.js');

var port = 8080;
var nteractions_port = 8081;

// connect to database
mongoose.connect('mongodb://', function(err){
    if(err) {
        console.log('db connection error', err);
    } else {
        console.log('db connection successful');
    }
});


app.engine('.hbs', handlebars({defaultLayout: 'single', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.set('port', process.env.PORT || port);
app.use("/public", express.static(__dirname + "/public"));

app.use(router);
nteractions.use(nteractions_router);

app.listen(port, function() {
    console.log('nspire port: '+ port);
});
nteractions.listen(nteractions_port, function() {
    console.log('nteractions port: '+ nteractions_port);
});