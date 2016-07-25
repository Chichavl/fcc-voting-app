'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pollSchema = new Schema({
	_id: String,
	user_id : String,
	//poll_url: String,
	poll_name : String,
	poll_options :[{ option: String, counter:{ type: Number, default: 0 } }],
	poll_ip : [String]
},
{ timestamps: { 
	createdAt: 'created_at',
	updatedAt: 'updated_at'
	
}
});

module.exports = mongoose.model('Url', pollSchema);