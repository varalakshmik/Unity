var express = require('express');
var router = express.Router();
var sendmail=require('../config/sendmail.js');
var nodemailer = require('nodemailer');
var smtpTransport = require("nodemailer-smtp-transport");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


  //Generic functionality to handle send mail on all contexts
router.post('/sendmail',function(req,res){
	
		console.log("entering ex");
		console.log("entering ex 1");
	
		console.log(JSON.stringify(req.body.details));

		//var cEmail = "varakumarsam@gmail.com";
		//var uEmail =JSON.stringify(req.body.email);
		var uEmail ="vara2504@gmail.com";
		var uName = JSON.stringify(req.body.details.name);
		var uPhone = JSON.stringify(req.body.details.phone);
		var msg = JSON.stringify(req.body.details.message);

		console.log(uName);
		// create reusable transporter object using the default SMTP transport
		var transporter = nodemailer.createTransport('smtps://varakumarsam%40gmail.com:sample12$$@smtp.gmail.com');

		// setup e-mail data with unicode symbols
		var mailOptions = {
		    from: '"Medical Clinic" <varakumarsam@gmail.com>', // sender address
		    to: uEmail, // list of receivers
		    subject: 'Query - Medical Clinic', // Subject line
		    text: 'sample test', // plaintext body
		    html: '<h3>Name:'+uName+'</h3><br/><h3>Phone:'+uPhone+'</h3><p><b>Message</b>:<br/>'+msg+'</p>' // html body
		};

		// send mail with defined transport object
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        return console.log(error);
		    }
		    console.log('Message sent: ' + info.response);

		    res.json("Success");
		});
	
	

});

module.exports = router;
