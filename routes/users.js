var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('user', { title: 'Express nodemon',data:'respond with a resource'});
});

module.exports = router;
