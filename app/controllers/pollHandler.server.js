'use strict';

var Poll = require('../models/poll.js');


	function genId(len) {
		var i;
		var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
		var id = '';
		for (i=0;i<len;i++) {
			id += chars.charAt(Math.floor(Math.random() * chars.length));
		}
		return id;
	}

function ApiHandler () {

	// this.getOriginalUrl = function (req, res) {
	// 	Url
	// 		.findByIdAndUpdate(req.params.id, { $inc: { 'counter': 1 } }, {select:{_id:0,}}, function(err, result) {
	// 			if (err) { throw err; }
				
	// 			if (result !== null) {
	// 				res.redirect(result.original_url);	
	// 			}
	// 			else {
	// 				res.json({error: "This url is not in database."});
	// 			}
	// 		}); 
	// };
	this.getPoll = function (req, res, next) {
		Poll.findById(req.params.id,function(err, result) {
				if (err) { throw err; }
				
				if (result !== null) {
					res.status(200).send(result);	
				}
				else {
					res.status(500).send({error: "This poll not found. It can be already deleted."});
				}
			})
	},
	
	this.addPoll = function (req, res, next) {
		var pollName = req.params.poll_name;
		var pollOptions = req.params.poll_options;
		// TODO: get User id from auth system
		var userId = "TBN";
		
		var poll = new Poll({
			"_id": genId(6),
			"user_id" : userId,
			poll_name : pollName,
			poll_options : pollOptions
			});
		
		poll.save(function (err) {
		  if (err) { 
				if (err.name === 'MongoError' && err.code === 11000) {
		        // Duplicate username
		        // TODO Notify on key duplication - need to increment genId
		        // for more combinations
		        console.log("key duplication - need to increment genId for more combinations");
		        res.status(500).send({ error: 'Internal server error, try once again. If error persist contact support' });
		     }
				else {
					return err;	
				}
			}
		  
		  else {
		  	res.status(200).send({ message: 'Poll saved' });
		  }
		});
	};
}

module.exports = ApiHandler;
