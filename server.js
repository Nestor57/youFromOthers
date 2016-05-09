var express = require('express');
var nodemailer = require("nodemailer");
var xoauth2 = require('xoauth2');
var $ = require('./jquery-2.2.3.min');
var smtpTransport = require('nodemailer-smtp-transport');
//var utoApp = require('./utoApp');
var app = express();
app.use(express.static(__dirname));
/*
    Here we are configuring our SMTP Server details.
    STMP is mail server which is responsible for sending and recieving email.
*/
var smtpTransport = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
        user: "negnichelovek@gmail.com",
        pass: "gbeksyemvywtckfj"
    }
}));

smtpTransport.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our messages');
    }
});
/*------------------SMTP Over-----------------------------*/

/*------------------Routing Started ------------------------*/

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/bundle.htm');
});
app.get('/me', function(req, res) {
    res.sendFile(__dirname + '/me.htm');
});
app.get('/send', function(req, res) {
    var mailOptions = {
        from: 'Sender Name <negnichelovek@gmail.com>',
        to: 'Sender Name <vdmsmirnov@gmail.com>',
        subject: req.query.subject,
        text: req.query.text
    }

    smtpTransport.sendMail(mailOptions, function(error, response) {
        if (error) {
            console.log(error);
            res.end("error");
        } else {
            console.log("Message sent: " + response.message);
            res.end("sent");
        }

        smtpTransport.close();
    });
});

/*--------------------Routing Over----------------------------*/

app.listen(3000, function() {
    console.log("Express Started on Port 3000");
});
