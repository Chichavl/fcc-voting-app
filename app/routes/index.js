'use strict';

var path = process.cwd();
var ApiHandler = require(path + '/app/controllers/pollHandler.server.js');

module.exports = function (app) {

	// function isLoggedIn (req, res, next) {
	// 	if (req.isAuthenticated()) {
	// 		return next();
	// 	} else {
	// 		res.redirect('/login');
	// 	}
	// }

	var apiHandler = new ApiHandler();



	// app.route('/new/:protocol//:url')
	// 	.get(apiHandler.addUrl);
		
	//create new poll
	app.route('/api/poll')
		.post(apiHandler.addPoll);
	//get poll by id
	app.route('/api/poll/:id')
		.get(apiHandler.getPoll);
		
	app.route('*')
		.get(function (req, res) {
			res.sendFile(path + '/public/index.html');
		});
};
