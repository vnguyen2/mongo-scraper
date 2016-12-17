var express = require('express');
var handles = require('express-handlebars');
var bodyParser = require('body-parser');
var router = require('./controllers/routes.js');
var mongoose = require('mongoose');
var request = require('request');
var Nodemon = require('nodemon');

var app = express();
var PORT = process.env.PORT || 3000;

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sales_db');
var db = mongoose.connection;

app.use(express.static('public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.engine('handlebars', handles({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', router);

app.listen(PORT, function(){
  console.log('Listening on port ',PORT);
});