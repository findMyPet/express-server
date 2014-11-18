var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PinSchema   = new Schema({
	location : { type: {}, index: '2dSphere' },
	sex : String,
	breed : String,
	dogSize : String,
	created_at : {type : Date, default : Date.now}
});

module.exports = mongoose.model('Pin', PinSchema);