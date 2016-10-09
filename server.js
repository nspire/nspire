var express = require('express')
var app = express()
var partners_network = express()
var mongoose = require('mongoose')
var handlebars = require('express-handlebars')
var router = require('./router.js')

var port = 8080
var partners_network_port = 8090

// connect to database
// mongoose.connect('mongodb://', function(err){
//     if(err) {
//         console.log('db connection error', err)
//     } else {
//         console.log('db connection successful')
//     }
// });


app.engine('.hbs', handlebars({defaultLayout: 'single', extname: '.hbs'}))
app.set('view engine', '.hbs');
app.set('port', process.env.PORT || port)
app.use("/public", express.static(__dirname + "/public"))

partners_network.engine('.hbs', handlebars({defaultLayout: 'single', extname: '.hbs'}))
partners_network.set('view engine', '.hbs');
partners_network.set('port', process.env.PORT || port)
partners_network.use("/public", express.static(__dirname + "/public"))

app.use(router)
partners_network.use(express.Router().get('*', function(req, res, next) {
  res.render('partners-network')
}))

app.listen(port, function() {
    console.log('nspire on port '+ port)
});

partners_network.listen(partners_network_port, function() {
	console.log('partners network on port ' + partners_network_port)
})