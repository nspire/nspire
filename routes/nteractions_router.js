const express = require('express');
const handlebars = require('express-handlebars');
const router = express.Router();
const mongoose = require('mongoose');
const article = require('../models/article.js')

var respond = (success, data) => { return { "success": success, "data": data }}

// articles JSON
router.get('/articles', function(req,res,next) {
	article.find({}, (err, articles) => {
		if(err) res.json(respond(false, err))
		res.json(respond(true, articles))
	})
})

router.get('/', function(req,res,next) {
	article.find({}, (err, articles) => {
		if(err) return res.render('nteractions/home', { layout: 'nteractions'})
		res.render('nteractions/home', { layout: 'nteractions', articles: articles})
	})
})

router.get('/admin', function(req, res, next) {
	res.render('nteractions/admin', { layout: 'nteractions-admin'})
})

router.get('/category/:category', function(req,res,next) {
	article.find({ "category": req.params.category }, (err, articles) => {
		if(err) return res.render('nteractions/categories', { layout: 'nteractions'})
		res.render('nteractions/categories', { layout: 'nteractions', category: req.params.category, articles: articles})
	})
})

router.get('/article/:id', function(req, res, next) {
	article.findOne({ "_id": req.params.id }, (err, article) => {
		if(err) return res.render('nteractions/article', { layout: 'nteractions'})
		res.render('nteractions/article', { layout: 'nteractions', article: article})
	})
})

router.put('/article/:id', function(req, res, next) {
	
})

router.delete('/article/:id', function(req, res, next) {

})

router.post('/clear', function(req,res,next) {
	if(req.body.secret == "nspire2017n") {
		article.remove({}, function (err, result) {
			if(err) res.json(respond(false, err))
			res.json(result)
		})
	} else {
		res.json("permission denied")
	}
})

router.post('/article', function(req, res, next) {
	console.log(req.body)
	if(req.body.secret == "nspire2017n") {
		console.log("article created!")
		article.create(req.body, function (err, article) {
			if(err) res.json(respond(false, err))
			res.json(respond(true, article))
		})
	} else {
		res.json("permission denied")
	}
})

// 404 handling
router.get('*', function(req, res){
  res.status(404).send('page not found')
})

module.exports = router