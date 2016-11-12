var express = require('express');
var braintree = require("braintree");
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var router = express.Router();
/* GET users listing. */
router.get('/', function(req, res, next) {
	res.render('payment', { title: 'Express nodemon',data:'respond with a resource'});
});

router.post('/cardpayment',multipartMiddleware, function(req, res, next) {


var token = getClientToken(req,res);


	//res.send('payment', {title: 'Express nodemon',data:'respond with a resource',type:"AmEx",number: req.body.username,expire_month:req.body.expiry_month,date:req.body.expiry_year,ccvno:req.body.password});
});

	

function getClientToken(req, res){

	var gateway = braintree.connect({environment: braintree.Environment.Sandbox,
		merchantId: "2hd5fx9d8272m5fr",
		publicKey: "z3tjh3pt4v3fsq5t",
		privateKey: "91cc07f4a79fab3fb6a6d0618dbc1bb0"})

	/*gateway.clientToken.generate({}, function (err, response) {
     var clientToken = response.clientToken;
 	})
 	console.log(clientToken);
	gateway.paymentMethodNonce.create("A_PAYMENT_METHOD_TOKEN", function(err, response) {
  	res.send(response.paymentMethodNonce.nonce);
});*/

var saleRequest = {
            amount: "11.00",
            creditCard: {
            	paymentMethodNonce:
                number: req.body.email,
                cvv: req.body.password,
                expirationMonth: req.body.expiry_month,
                expirationYear: req.body.expiry_year,
                cardHolder: req.body.username
            },
            options: {
                submitForSettlement: true
            }
    };
    gateway.transaction.sale(saleRequest, function(error, result){
            if(error){
                console.log(error.name);
                throw error;
            }
            if(result.success){
                response.send(result.transaction.id);
            } else {
                response.send(result.message);
            }
    });

};


module.exports = router;
