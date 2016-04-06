'use strict';

var path = process.cwd();
var ApiHandler = require(path + '/app/controllers/urlHandler.server.js');

module.exports = function (app) {

	// function isLoggedIn (req, res, next) {
	// 	if (req.isAuthenticated()) {
	// 		return next();
	// 	} else {
	// 		res.redirect('/login');
	// 	}
	// }

	var apiHandler = new ApiHandler();

	app.route('/')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});

	app.route('/new/:protocol//:url')
		.get(apiHandler.addUrl);
		
	//route is invalid should return error (no double slashes)
	app.route('/new/:url')
		.get(function(req, res) {
		    res.json({error: "Wrong url format, make sure you have a valid protocol and real site."});
		});
	
	app.route('/:id')
		.get(apiHandler.getOriginalUrl);
};
