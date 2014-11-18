var express = require('express');
var underscore = require('underscore');
var passport = require('passport');
var router = express.Router();
var Pin     = require('../app/models/pin');
var User     = require('../app/models/user');


router.post('/pins', function(req, res) {
	//req.headers.authorization
	var pin = Pin();
	pin.location = [Number(req.body.longitude), Number(req.body.latitude)];
	pin.sex = req.body.sex;
	pin.breed = req.body.breed;
	pin.dogSize = req.body.dogSize;
	pin.save(function(err) {
		if (err)
			res.status(400).json(err);

		res.status(201).json({ message: 'Pin created!', pin : pin});
	});
});
router.put('/pins/:id', function(req, res) {
	//req.headers.authorization
	var id = req.param('id');
	Pin.findOne({'_id' : id}, function(err, pin){
        if(err)
            res.status(500).json({message : err});
        if(!pin){
            res.status(404).json({message : 'Pin no encontrado'});
        }else{
		    var body = req.body;
		    console.log(req.body);
		    for(var p in body){
		    	//TODO: ¿Cómo hacer atributos dinámicos?
		    	console.log("Antes : "+pin[p]);
		    	pin[p] = body[p];
		    	console.log("Después : " +pin[p]);
		    }
		    pin.save(function(err) {
				if (err)
					res.status(400).json(err);
				else res.status(201).json({ message: 'Pin created!', pin : pin});
			});
        } 
        

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
		res.json(pins);
	});
});
router.get('/pins/:id', function(req, res) {
	//req.headers.authorization
	var id = req.param('id');
	console.log(id);
	Pin.findOne({'_id' : id}, function(err, pin){
        if(err)
            res.status(500).json({message : err});
        if(!pin){
            res.status(404).json({message : 'Pin no encontrado'});
        }else res.status(200).json(pin);
        

    });
});
router.get('/profile', 
passport.authenticate('bearer', { session: false }),
function(req, res) {
res.json(req.user);
});

router.post('/users/new', function(req, res) {
	//req.headers.authorization
	var user = User();
	var body = req.body;
	switch(body.loginMethod){
		case "local":
			passport.authenticate('local-signup');
			break;
		case "facebook":
			break;
		case "twitter":
			break;
		case "gplus":
			break;
	}
	user.local. = req.body.dogSize;
	user.save(function(err) {
		if (err)
			res.status(400).json(err);

		res.status(201).json({ message: 'user created!', user : user});
	});
});

module.exports = router;