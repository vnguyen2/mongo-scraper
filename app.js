var express = require('express');
var handles = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sales_db');
var db = mongoose.connection;

app.use('/static', express.static('public'));

app.use(bodyParser.urlencoded({
  extended: false
}));

app.engine('handlebars', handles({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/routes.js');
app.use('/', routes);

app.listen(PORT, function(){
  console.log('Listening on port ',PORT);
});