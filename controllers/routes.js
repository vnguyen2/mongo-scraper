var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var router = express.Router();

// models for routes
var Buildapcsales = require('../models/buildapcsales');
var Comment = require('../models/buildapcsalesComment');
