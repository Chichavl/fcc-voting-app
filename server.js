'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');
var mongoose = require('mongoose');
// begin webpack dev staff
// TODO Ask what is rigth way to remove it in production
var webpack = require('webpack');
var config = require('./webpack.config.js');
var webpackHotMiddleware = require('webpack-hot-middleware');
var compiler = webpack(config);
// end webpack dev staff
var app = express();
require('dotenv').load();
app.use(webpackHotMiddleware(compiler)); 
mongoose.connect(process.env.MONGO_URI);

app.use(express.static('public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
app.use('/public', express.static(process.cwd() + '/public'));
app.use('/common', express.static(process.cwd() + '/app/common'));

routes(app);

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});