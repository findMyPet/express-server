var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PinSchema   = new Schema({
	location : { type: {}, index: '2dSphere' },
	sex : String,
	breed : String,
	dogSize : String
});

module.exports = mongoose.model('Pin', PinSchema);