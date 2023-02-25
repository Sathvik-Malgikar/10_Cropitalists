var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  "service": 'outlook',
  "auth": {
    "user": 'Cropitalists@outlook.com',
    "pass": 'Thefarmer'
  }
});

function sendto (toaddress,keyurl){
  var mailOptions = {
    "from": 'Cropitalists@outlook.com',
    "to": toaddress,
    "subject": 'Registration process initiated.',
    "text": `Welcome to Cropitalists! This is your first step to changing your farmland model to a capitalistic trade. Click on this verification link, do not share with anyone. ${keyurl} `
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
module.exports = sendto