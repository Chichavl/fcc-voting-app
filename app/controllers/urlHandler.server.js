'use strict';

var validUrl = require('valid-url');
var Url = require('../models/url.js');


	function genId(len) {
		var i;
		var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var id = '';
		for (i=0;i<len;i++) {
			id += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		return id;
	}

function ApiHandler () {

	this.getOriginalUrl = function (req, res) {
		Url
			.findByIdAndUpdate(req.params.id, { $inc: { 'counter': 1 } }, {select:{_id:0,}}, function(err, result) {
				if (err) { throw err; }
				
				if (result !== null) {
					res.redirect(result.original_url);	
				}
				else {
					res.json({error: "This url is not in database."});
				}
			}); 
	};

	this.addUrl = function (req, res, next) {
		var fullUrl = req.params.protocol + '//' + req.params.url;
		if (validUrl.isWebUri(fullUrl)) {
		    //valid url
		    	Url.findOneAndUpdate({"original_url": fullUrl}, 
			{$setOnInsert: 
				{
					"_id": genId(6),
					"original_url": fullUrl,
					"counter": 0
				}
			} ,
			{upsert: true, 'new': true},
			function(err, result){
				if (err) { 
					if (err.name === 'MongoError' && err.code === 11000) {
			        // Duplicate username
			        // TODO Notify on key duplication - need to increment genId
			        // for more combinations
			        console.log("key duplication - need to increment genId for more combinations");
			        res.status(500).send({ error: 'Internal server error, try once again. If error persist contact support' });
			      }
					else {
						throw err;	
					}
				}
				res.json({ "original_url":result.original_url, "short_url":req.protocol + '://' + req.get('host') + '/' + result._id});
			});
		  } else {
		  	//url invalid
		    res.json({error: "Wrong url format, make sure you have a valid protocol and real site."});
		  }
	
		
		// var url = new Url ({
		// 	"_id": genId(6),
		// 	"original_url": req.params.protocol + '//' + req.params.url
		// });
		
		// url.save(function(err, result){
		// 	if (err) { 
		// 		if (err.name === 'MongoError' && err.code === 11000) {
		//         // Duplicate username
		//         // TODO Notify on key duplication - need to increment genId
		//         // for more combinations
		//         console.log("key duplication - need to increment genId for more combinations");
		//         res.status(500).send({ error: 'Internal server error, try once again. If error persist contact support' });
		//       }
		// 		else {
		// 			throw err;	
		// 		}
		// 	}
		// 	res.json({ "original_url":result.original_url, "short_url":req.protocol + '://' + req.get('host') + '/' + result._id});
		// });
	};
}

module.exports = ApiHandler;
