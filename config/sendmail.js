var nodemailer=require("nodemailer");
var fs=require('fs');
var path=require('path');



module.exports=function(to,subject,content,attachment){

   //Initial Configuration
	var transport=nodemailer.createTransport("SMTP",{

		service:"Gmail",

	});

    var filepath=path.resolve('.')+'\\files\\'+attachment;

    //Read attachment from server
    fs.readFile(filepath,function(err,data){
    	if(err)
    		throw err;

        //Populating mail options
    	var options={
		from:config.mail.FromAddress,	
		to:to,
		subject:subject,
		html:content
	    }

       //Send Mail Function
       transport.sendMail(options,function(err,info){
	       	if(err)
	       		throw err;
       });

    });

   //close the connection
    transport.close();
}


	





	
