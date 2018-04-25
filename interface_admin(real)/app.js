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
/* connection avec le javascript
on utilise le module socket.io*/
 /**/
 /**/


 var io = require('socket.io').listen(server);

/* Begin of synchronous listening of server */
io.sockets.on('connection', function (socket) {

    // Send a temp message to the client to confirm his connection
    socket.emit('message', 'Vous êtes bien connecté ! ');

    // Alert the server
    console.log("Un client s'est connecté");
    
    
    
    
    
    
        function printAll(){
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost/bddClient";

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var mysort = { name: 1 };
            db.collection("clients").find().sort(mysort).toArray(function(err, result) {
                if (err) throw err;
                console.log(result);
                db.close();
          
                socket.emit("nameAllDataBase", Clientname);
                socket.emit("firstnameAllDataBase", clientFirstname)
                db.close();
            }); 
        });
    }
    




    //Recherche un client en particulier à partir de son nom
    socket.on('clientNameToFind', function(Clientname){
        var MongoClient = require("mongodb").MongoClient;
        MongoClient.connect("mongodb://localhost/bddClient", function(error, db) {
            if (error) return funcCallback(error);

            console.log("Connecté à la base de données 'tutoriel'");
            var MongoObject = require("mongodb");         
            var nameToFind      = clientNameToFind;           

            db.collection("clients").findOne(nameToFind, function(error, result) {
                if (error) throw error;

                results.forEach(function(i, obj) { 
                    
                    socket.emit("name", Clientname);
                    socket.emit("firstname", clientFirstname);
                    socket.emit('number', clientNumber);
                    socket.emit('adress', clientAdress);
                    socket.emit('city', clientCity);
                    socket.emit('mail', clientMail);
                }); 
            });
        });
    });
    
    
    //Changer mdp admin
    socket.on('adminName', function(adminName){
        socket.on('passwordToChange', function(passwordToChange){
            var MongoClient = require("mongodb").MongoClient;
            MongoClient.connect("mongodb://localhost/bddClient", function(error, db) {
                if (error) return funcCallback(error);
                console.log("Connecté à la base de données 'tutoriel'");
            
                var idToFind = adminName;           
                var password = passwordToChange
                db.collection("administrateurs2").update(
                    { Id: idToFind}, 
                    { $set: { password: password } }
                );
            });
        });
    });

    
    
    //Supprimer un client
    
    socket.on('clientIDToDelete', function(clientID){
        var MongoClient = require("mongodb").MongoClient;
        MongoClient.connect("mongodb://localhost/bddClient", function(error, db) {
            if (error) return funcCallback(error);

            console.log("Connecté à la base de données 'tutoriel'");
            
            var MongoObjectID = require("mongodb").ObjectID;          // Il nous faut ObjectID
            var idToFind      = clientID;           // Identifiant, sous forme de texte
            var objToFind     = { _id: new MongoObjectID(idToFind) }; // Objet qui va nous servir pour effectuer la recherche

            db.collection("clients").remove(objToFind, null, function(error, result) {
                if (error) throw error;   
            });
        });
    });
        
        
        
    //Ajouter un admninistrateur
        
        socket.on('newAdminName', function(newAdminName){
            socket.on('newPassword', function(newPassword){
                            
                var MongoClient = require("mongodb").MongoClient;
                MongoClient.connect("mongodb://localhost/bddClient", function(error, db) {
                    if (error) return funcCallback(error);
                    console.log("Connecté à la base de données 'bddClient'");
                                
                    var newAdmin = { adminName: newAdminName, password: newPassword};
                                                                  
                    db.collection("administrateurs2").insert(newAdmin, null, function (error, results) {
                        if (error) throw error;

                        console.log("Le document a bien été inséré");  
                    });
                });
            });
        });
    
    
    //connexion administrateur
    
    socket.on('adminName', function(adminName){
        socket.on('password', function(password){
            var MongoClient = require("mongodb").MongoClient;
            MongoClient.connect("mongodb://localhost/bddClient", function(error, db) {
                if (error) return funcCallback(error);

                console.log("Connecté à la base de données 'tutoriel'");
                var MongoObject = require("mongodb");         
                var nameToFind      = adminName;    
                var passwordAdmin = password;
                console.log(nameToFind + " " + passwordAdmin);

                db.collection("administrateurs2").findOne({adminName : nameToFind, password : passwordAdmin}, function(error, result) {
                    if (error) {
                        socket.emit('ok', 0);
                        throw error;
                    }
                    else{
                        console.log("nomAdmin :" + result.adminName + " " + "prénomAdmin" + result.adminFirstname + " " + "mdp :" + result.password);
                        socket.emit('ok', 1);
                    }
                });
            });
        });
    });
    

 


/**/
/**/
/* fonction qui permet d'envoyer le mail lorsque l'admin click
sur 'envoyer'*/
/*bodyParser nous sert à récupérer les informations de la page html grace à 
la fonction function(req, res, next)*/

/*pour l'instant il faut désactiver son antivirus pour que ça marche
il faut une adresse mail gmail*/
/*bodyparser permet de récuérer les éléments du html*/
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
         
         attachments : [{filename: req.body.joindreFichier, path: './Ressources/farmingData/'+req.body.nomClient+'/'+req.body.joindreFichier, contentType:'aplication/pdf' }]
          
      };



      /* c'est la fonction qui permet d'envoyer le mail
      on rajoute un console.log dans le cas si ça marche avec un message confirmant l'envoie 
      ou un message d'errrut si ça ne marche pas*/
      
      transporter.sendMail(mailOptions, (error, info)=> {
          if (error) {
              return console.log(error);
          }
          console.log('Message %s sent: %s', info.messageId, info.response);
          socket.emit('message', 'le mail vient d\'être envoyé');
              res.render('index');
          });
               

 });


/*on ferme le socket ici*/
});





server.listen(8080);