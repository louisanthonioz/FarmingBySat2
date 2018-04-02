 // Connect with socket io
 var socket = io.connect('http://localhost:8080');

/*  Receivers  */

// Receive connection's confirmation from server
socket.on('message', function(message) {
  alert('Le serveur a un message pour vous : '+message);
});
 
 function supprimerDonnees(){
  	socket.emit('supprimer', "il faut supprimer toutes les données de la page");
  	
  };     