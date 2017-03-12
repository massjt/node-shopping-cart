var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find(function(err, docs){
    // get data and chunk render
    var productChunks = [];
    var chunkSize = 3;
    for (let i = 0; i < docs.length; i += chunkSize) {
      productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart' , products: productChunks});
  });
});

module.exports = router;
