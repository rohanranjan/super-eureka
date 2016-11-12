var express = require('express') 
    ,router = express.Router()
    ,FindAll = require('../commonfunction.js').FindAll;

var dbConnection = new DbConnection('127.0.0.1',27017);


router.get('/', function(req, res, next) {

dbConnection.findAll(function(err,data){
    res.render('userlist',{title:"All Details",list:data });
}); 
//res.render('userlist',{title:"All Details"});
});

/*  res.render('userlist', { title: 'Express' });*/

module.exports = router;