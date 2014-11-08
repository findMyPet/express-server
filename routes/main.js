var express = require('express');
var router = express.Router();

/* GET home page. */
router.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8000');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
router.get('/', function(req, res) {
	//res.json({ message: 'hooray! welcome to our api!' });
  	res.render('index', { title: 'FindMyPet!' });
});
router.get('/login', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('login', { message: req.flash('loginMessage') }); 
});
router.get('/signup', function(req, res) {
    // render the page and pass in any flash data if it exists
    res.render('signup', { message: req.flash('signupMessage')}); 
});

module.exports = router;
