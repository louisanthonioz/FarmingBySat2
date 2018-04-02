// Necessary modules for server
var http = require('http');
var fs = require('fs');
var path = require('path');
var express = require('express');
var formidable = require('formidable');
var nodeMailer = require('nodemailer');
var bodyParser = require('body-parser');
var Zip = require('adm-zip');
const {URL} = require('url');
var app = express();


// Creation of the server
var server = require('http').createServer(app);

// Init of express, to point our Ressources
app.use(express.static(__dirname + '/Ressources/'));


// Define the view, so index.html
app.get('/', function(req, res,next) {
    res.sendFile(__dirname + '/Views/index.html');

});





/**/
/**/
/* connection avec le javascript*/
 /**/
 /**/


 var io = require('socket.io').listen(server);

/* Begin of synchronous listening of server */
io.sockets.on('connection', function (socket) {

    // Send a temp message to the client to confirm his connection
    socket.emit('message', 'Vous êtes bien connecté ! ');

    // Alert the server
    console.log("Un client s'est connecté");


    /*fonction pour suprimer les données de la page 5
    si on quite cette page*/
    socket.on('supprimer', function(message){

      console.log('l\'admi a un message pour le server : '+message);
      deleteFolder('./Ressources/farmingData/');
      console.log('Dossier supprimé');

    
    

});

  });

/*fonction qui suprime les fichiers placer dans farmingData*/

/*  Allow server to recursively delete a folder and it content by passing it path */
function deleteFolder(path) {
  if( fs.existsSync(path) ) {
    fs.readdirSync(path).forEach(function(file) {
      var curPath = path + "/" + file;
        if(fs.statSync(curPath).isDirectory()) { // recurse
          deleteFolderRecursive(curPath);
        } else { // delete file
          fs.unlinkSync(curPath);
        }
    });
   
  }
   


}





/**/
/**/
/* fonction qui permet d'envoyer le mail lorsque l'admin click
sur 'envoyer'*/
/*bodyParser nous sert à récupérer les informations de la page html grace à 
la fonction function(req, res, next)*/

/*pour l'instant il faut désactiver son antivirus pour que ça marche*/
/**/
/**/


  app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/email', function(req, res, next) {


	/* il faut une adresse gmail, l'addresse et le mot de passe récupéré
  sur la page html*/

	 var transporter = nodeMailer.createTransport({
          host: 'smtp.gmail.com',
          auth: {
              user: req.body.sender,
              pass: req.body.motDePasse,
          }
      });

   /* On récupère l'addresse de l'admi et l'addresse du client+ le message 
   écrit sur la page html*/


      var mailOptions = {
          from: req.body.sender, // sender address
          to: req.body.destination, // list of receivers
          subject: req.body.subject, // Subject line
          text: req.body.message, // plain text body
          html: '<b>'+ req.body.message +'</b>', // html body
         /* la fonction attachments permet de joindre un fichier*/
          attachments: [
          {
            filePath: './Ressources/farmingData/Rapport de peofessionnalisation.pdf'
          },
          ]
      };

      /* c'est la fonction qui permet d'envoyer le mail
      on rajoute un console.log dans le cas si ça marche avec un message confirmant l'envoie 
      ou un message d'errrut si ça ne marche pas*/
      
      transporter.sendMail(mailOptions, (error, info)=> {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
              res.render('index');
          });
      });

/*fonction pour récupérer le fichier télécharger*/
// Event to handle uploads files

app.post('/upload', function(req, res){

  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;
  
  var dir = "/Ressources/farmingData/";

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, dir);

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);

});


/**/
/**/
/**/
/*fonction qui supprime les fichiers téléchargé*/
/**/
/**/
 





server.listen(8080);