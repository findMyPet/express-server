var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PinSchema   = new Schema({
	location: {
		latitude: String,
		longitude: String
	},
	loc: { type: {}, index: '2dSphere' }
});

module.exports = mongoose.model('Pin', PinSchema);