var express = require('express')
var app = express()
var partners_network = express()
var nteractions = express()
var mongoose = require('mongoose')
var bodyParser    = require('body-parser')
var handlebars = require('express-handlebars')
var config = require('./config/config.js')
var router = require('./routes/router.js')
var nteractions_router = require('./routes/nteractions_router.js')

var port = 8080
var partners_network_port = 8090
var nteractions_port = 8100

// connect to database
mongoose.connect(config.db, function(err){
    if(err) {
        console.log('db connection error', err)
    } else {
        console.log('db connection successful')
    }
});

var hbs = handlebars.create({
    helpers: {
        ifEqual: function(a, b, opts) {
			if(a == b) 
				return opts.fn(this);
			else
				return opts.inverse(this);
			}
    },
    defaultLayout: 'single', 
    extname: '.hbs'
});

app.engine('.hbs', hbs.engine)
app.set('view engine', '.hbs');
app.set('port', process.env.PORT || port)
app.use("/public", express.static(__dirname + "/public"))
app.use(bodyParser.json({limit: '20mb'}))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(router)

partners_network.engine('.hbs', hbs.engine)
partners_network.set('view engine', '.hbs');
partners_network.set('port', process.env.PORT || partners_network_port)
partners_network.use("/public", express.static(__dirname + "/public"))
partners_network.use(bodyParser.json({limit: '20mb'}))
partners_network.use(bodyParser.urlencoded({ extended: false }))
partners_network.use(express.Router().get('*', function(req, res, next) {
  res.render('partners-network')
}))

nteractions.engine('.hbs', hbs.engine)
nteractions.set('view engine', '.hbs');
nteractions.set('port', process.env.PORT || nteractions_port)
nteractions.use("/public", express.static(__dirname + "/public"))
nteractions.use(bodyParser.json({limit: '20mb'}))
nteractions.use(bodyParser.urlencoded({ extended: false }))
nteractions.use(nteractions_router)


app.listen(port, function() {
    console.log('nspire on port '+ port)
})

partners_network.listen(partners_network_port, function() {
	console.log('partners network on port ' + partners_network_port)
})

nteractions.listen(nteractions_port, function() {
	console.log('nteractions on port ' + nteractions_port)
})