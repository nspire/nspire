var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

// home page
router.get('/', function(req, res, next) {
  res.render('index')
});

// 404 handling
router.get('*', function(req, res){
  res.status(404).send('page not found');
});

module.exports = router;