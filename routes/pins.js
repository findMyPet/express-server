var express = require('express');
var router = express.Router();
var Pin     = require('../app/models/pin');

router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
router.get('/new', function(req, res) {
  	res.render('newPin', { title: 'FindMyPet!'});
});
router.post('/', function(req, res) {
    var pin = Pin();
    pin.location = [Number(req.body.longitude), Number(req.body.latitude)];
    pin.sex = req.body.sex;
    pin.breed = req.body.breed;
    pin.dogSize = req.body.dogSize;
    pin.age = req.body.age;
    pin.description = req.body.description;
    pin.save(function(err) {
        if (err)
            res.send(err);

        res.render('index', { title: 'FindMyPet!'});  
    });
});
module.exports = router;
