var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function(req, res, next) {
    console.log("yei")
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
router.get('/', function(req, res) {
	//res.json({ message: 'hooray! welcome to our api!' });
  	res.render('index', { title: 'FindMyPet!' });
});

module.exports = router;
