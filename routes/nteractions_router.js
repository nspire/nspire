const express = require('express');
const handlebars = require('express-handlebars');
const router = express.Router();
const mongoose = require('mongoose');
const article = require('../models/article.js')

var respond = (success, data) => { return { "success": success, "data": data }}

// home page
router.get('/', function(req, res, next) {
  res.render('nteractions/categories', { layout: 'nteractions'})
})

// articles JSON
router.get('/articles', function(req,res,next) {
	article.find({}, (err, articles) => {
		if(err) res.json(respond(false, err))
		res.json(respond(true, articles))
	})
})

router.get('/category/:category', function(req,res,next) {
	article.find({ "category": req.params.category }, (err, articles) => {
		if(err) res.render('nteractions/categories', { layout: 'nteractions'})
		res.render('nteractions/categories', { layout: 'nteractions', category: req.params.category, articles: articles})
	})
})

router.get('/article/:id', function(req, res, next) {
	article.find({ "_id": req.params.id }, (err, article) => {
		if(err) res.render('nteractions/article', { layout: 'nteractions'})
			console.log(article)
		res.render('nteractions/article', { layout: 'nteractions', article: article})
	})
})

router.get('/clear', function(req,res,next) {
	article.remove({}, function (err, result) {
		if(err) res.json(respond(false, err))
		res.json(result)
	})
})

router.post('/article', function(req, res, next) {
	console.log(req.body)
	article.create(req.body, function (err, article) {
		if(err) res.json(respond(false, err))
		res.json(respond(true, article))
	})
})

// 404 handling
router.get('*', function(req, res){
  res.status(404).send('page not found')
})

module.exports = router