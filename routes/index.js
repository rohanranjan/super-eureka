var express = require('express');
var http = require('http');
//var bodyParser = require('body-parser');
var fs = require('fs-extra');
var util = require('util');
var router = express.Router();
//var formidable = require('formidable');
var multiparty = require('multiparty');
//var multer = require('multer');
var app = express();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var size = '';
var fileName = '';



//var upload = multer({dest: __dirname + './uploads/'});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express test for nodemon' });
});


router.post('/uploadimage',multipartMiddleware,function(req, res, next) {

if (req.url == '/uploadimage' && req.method.toLowerCase() == 'post') {
    
    
	var Username = req.body.username;
	var UserPassword = req.body.userpassword;
	var originalfilename = req.files.image.originalFilename;
    var originalFilepath = req.files.image.path;
     
    var uploadlocation = __dirname + '/uploads/'+ originalfilename;
     
     var form = new multiparty.Form();


 /* Temporary location of our uploaded file */
            var temp_path = originalFilepath;
            /* The file name of the uploaded file */
            var file_name = uploadlocation;
            /* Location where we want to copy the uploaded file */
            fs.copy(temp_path, file_name , function(err) {  
                if (err) {
                    console.error(err);
                } else {
                    console.log("success!")
                }
            });


form.parse(req,function(fields, files){
        
        res.writeHead(200, {'content-type': 'text/plain'});
        res.write('Upload received :\n'); 
        res.end(util.inspect({fields: req.body, files: req.files}));
     });
    return;

}

});


module.exports = router;
