var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PinSchema   = new Schema({
	location : { type: {}, index: '2dSphere' },
	name : String,
	sex : String,
	breed : String,
	dogSize : String,
	age : String,
	description : String,
	created_at : {type : Date, default : Date.now}
});

module.exports = mongoose.model('Pin', PinSchema);