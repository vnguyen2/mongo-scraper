var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();

// models for routes
var Buildapcsales = require('../models/buildapcsales');
var Comment = require('../models/buildapcsalesComment');

// Routes
router.get('/', function(req, res){
  res.render('home', {title: 'Build A PC Sales Scraper'});
});

router.get('/sales', function(req, res){
  res.render('sales', {title:'Tech for less'});
});

//scrape router
router.post('/sales-scrape', function(req,res){
  
  request('https://www.reddit.com/r/buildapcsales/', function(err, response, sale){
    var data = cheerio.load(sale);
    data('.title').each(function(i, element){
      var title = data(this).children('a').text();
      var link = 'https://www.reddit.com'+data(this).children('a').attr('href');
      
      if(title && link){
        var entTitle = {title, link};
        var entrep = new Buildapcsales(entTitle);
        entrep.save(entTitle);
      }
    });
  });  
  res.redirect('/');
});

module.exports = router;