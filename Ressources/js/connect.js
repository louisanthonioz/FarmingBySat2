 // Connect with socket io
 var socket = io.connect('http://localhost:8080');

/*  Receivers  */

// Receive connection's confirmation from server
socket.on('message', function(message) {
  alert('Le serveur a un message pour vous : '+message);


 

});




// permet de transmettre la fontion envoyermail au serveur pour qu'il puisse la traiter
function envoyermessage(){
socket.emit('messagemail', 'il faut envoyer un mail');


}


function joindrefichier(){
	socket.emit('joindrefichier', 'il faut joindre un fichier');
	
}

	
	
	
