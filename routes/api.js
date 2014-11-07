var express = require('express');
var router = express.Router();
var Pin     = require('../app/models/pin');


router.post('/pins', function(req, res) {
	var pin = Pin();
	pin.location.latitude = req.body.latitude;
	pin.location.longitude = req.body.longitude;
	pin.save(function(err) {
		if (err)
			res.send(err);

		res.json({ message: 'Pin created!' });
	});
});
router.get('/pins', function(req, res) {
	var swLt = Number(req.param('swLt'));
	var swLn = Number(req.param('swLn'));
	var neLt = Number(req.param('neLt'));
	var neLn = Number(req.param('neLn'));
	var lonLat = { $geometry :  { type : "Point" , coordinates :  new Array(-99.180576,19.412084) } };
	//latitude=-100.138600&longitude=20.496771 -100.138600,20.496771

	Pin.find({location:{$geoWithin:{$box:[[swLn, swLt],[neLn,neLt]]}}})
		.exec(function(err, pins) {
		if (err)
			res.send("Error:"+err);
		res.send(pins);
	});
});

module.exports = router;