'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var urlSchema = new Schema({
	_id: String,
	original_url: String,
	counter: Number
},
{ timestamps: { 
	createdAt: 'created_at',
	updatedAt: 'updated_at'
	
}
});

module.exports = mongoose.model('Url', urlSchema);
