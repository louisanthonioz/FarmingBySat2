// Necessary modules for server
var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var formidable = require('formidable');
var nodemailer = require('nodemailer');
var querystring = require('querystring');
var bodyParser = require('body-parser');
var ejs= require('ejs');
var app = express();





// Creation of the server
var server = require('http').createServer(app);

// Init of express, to point our Ressources
app.use(express.static(__dirname + '/Ressources/'));


// Define the view, so index.html
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/Views/index.html');

});



 
 var io = require('socket.io').listen(server);

/* Begin of synchronous listening of server */
io.sockets.on('connection', function (socket) {

    // Send a temp message to the client to confirm his connection
    socket.emit('message', 'Vous êtes bien connecté ! ');

    // Alert the server
    console.log("Un client s'est connecté");


    
 
   // en dessous recuperation de la fonction joindre fichier et traitement de la fonction

   socket.on('joindrefichier', function(message){
   	socket.emit('message', 'le fichier est en cours');
   	console.log('l\'administrateur a envoyé un message : ' +message);

   });

  });







 








server.listen(8080);





