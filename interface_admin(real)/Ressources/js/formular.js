
/*variable utilié dans le javascript*/

var mpd;
var id;

var test;
var idadmin;
var nouveauClient;
var nomPrenom;
var nom;
var nomText;

var nomEnfant;
var parentNom;
var carteEnfant;
var parentCarte;
var carte2Enfant;
var parentCarte2;

var nouveauLien;
var nouveauLienText;
var lienCarte;
var img;
var overlay;

var joindre;

var listeClient = ['a','b','c','d','e','f','g','h','i','j','k'];
var ajouterClient;

var deroulo;
var nomClient;





/*on récupère le mot de passe écrit par l'admi 
grace à document.getElementById*/




/*fonction qui test la compatibilité du mdp écrit par l'admi
la fonction est déclenché lorsque l'admi appuie sur le boutton OK 
à coté du block mot de passe
.style.display= "block" permet d'afficher l'élément
.style.display= "none" permet de cacher l'élément 
il faut dans un premier temps les afficher ou les cacher dans le css */

function goSecondStep(){

	/* on crée une variable test qui est la valeur correcte
 du mot de passe et la variable administrateur la valeur correcte de id*/
	 mdp = document.getElementById("password").value;
	 id = document.getElementById("identifiant").value;
	 test = 'test';
	 idadmin = 'administrateur';
	

	if (mdp == test && id == idadmin ){
		document.getElementById('secondStep').style.display = "block";
		document.getElementById('firstStep').style.display = "none";
		faireLaListe();
	}
	else{
		alert("mot de passe ou identifiant incorrect");
		
	}	
}

/* rechercheNouveau: fonction qui permet de passer sur la 4e page
 si on click sur ok lors de la recherche nouveau client
de plus elle fait apparaitre le nom et prénom du client
 en haut à gauche. Si l'entrez est vide la fonction renvoie 
 un message d'erreur */

function rechercheNouveau(client){

	 nouveauClient = document.getElementById(client).value;
	
	if (nouveauClient != '' ){
	
	document.getElementById('fourthStep').style.display = "block";
	document.getElementById('secondStep').style.display = 'none';
	
	
	nomPrenom = document.createElement('p');
	nomPrenom.id= 'nomPrenom';


	nom= document.getElementById('AfficherNom');
	nom.appendChild(nomPrenom);

 	nomText= document.createTextNode(nouveauClient);
	nomPrenom.appendChild(nomText);

	return(nouveauClient);
	
	
	


		}else { 
		alert("vous devez entrer le nom et le prénom d'un client");

	}
	
}




/**/
/**/
/*on appelle la fonction qui supprime les données de la page 4
On utilise la fonction removeChild qui va supprimer l'élément enfant
d'un élément parent sélectionné.
leséléments enfants sont ceux que l'on crée dans le javascript*/
/**/
/**/	
function element4(){
		
		

		nomEnfant= document.getElementById('nomPrenom');
		parentNom = document.getElementById('AfficherNom');
		parentNom.removeChild(nomEnfant);

	
		carteEnfant= document.getElementById('nouveauLien');
		parentCarte = document.getElementById('cartes');
		parentCarte.removeChild(carteEnfant);	

		carte2Enfant= document.getElementById('lienCarte');
		parentCarte2 = document.getElementById('carte2');
		parentCarte2.removeChild(carte2Enfant);		
		
		
		alert('Les éléments de la page ont été supprimé');
	

	}

	/*permet de revenir sur la 3e page
 supprime tout les éléments effectuer sur la 4e page(pas encore fait)
 la fonction se décleche en appuyant sur le boutton retour du html*/
	

function retour(){
	document.getElementById('fourthStep').style.display = "none";
	document.getElementById('secondStep').style.display= "block";
	document.getElementById('renseignementClientPage2').style.display='none';
	supprimerBaseDeDonneesClient();


}




/*function retour2 permet de revenir à la page4: 
la page client lorsqu'on est à la page5: 
la pag pour envoyer un mail au client*/

function retour2(){
	document.getElementById('fifthStep').style.display = "none";
	document.getElementById('fourthStep').style.display= "block";
    document.getElementById('sendMail').style.display="block";
	

  
		



	/*on appelle la fonction qui supprime les fichiers joint 
	et la fonction qui supprime les élémens de la page5*/
	supprimerDonnees();

}

	function element5(){

  /*fonction pour suppprimer les éléments de la page 5:
 le texte, les adresses...*/

	
		alert('les pièces jointes ont été supprimé');

	}

	

/*toujours lors du click sur le bouton ok de la 3e page, 
la fonction affiche un lien avec le document correspondant au client en question
pour faire cela on crée un élément lien caractérisé par la borne <a>
on lui donne un id et un href qui est le lien
grace à la fonction appendChild on insère l'élément enfant (élément a)qu'on vient de créer
 dans un élément parent cad qui le recouvre
  ici ça correspond à l'élément ayant id: elementDossier
  ensuite pour que le lien marche il lui faut un support sur lequel l'admi devra apuyer pour le lancer
  pour cela on crée du text avec la fonction document.createtextNode
  on insère se text dans l'élément <a> grace à la fonction appendChild  */







/*permet d télécharger la carte du client et de l'afficher sur la page
 de plus elle insere un lien qui permet d'obtenir la carte en grand 
 si on click dessus et de revenir normal en appuyant ailleurs
 */



function lesCartesNouveau(){

/*la première partie permet de créer un lien qui permettra d'agrandir la carte
lorsqu'on apuyera sur "afficher en grand" */
	nouveauLien = document.createElement('a');
	nouveauLien.id='nouveauLien';
	nouveauLien.href = 'afficherCarte';
	document.getElementById('cartes').appendChild(nouveauLien);

	nouveauLienText = document.createTextNode("afficher en grand");
	nouveauLien.appendChild(nouveauLienText);

/*la deuxième partie permet d'afficher la carte sur la page
dans le css on limite la taille de la carte pour qu'elle reste petite
*/

	lienCarte= document.createElement('img');
	lienCarte.id='lienCarte';
	lienCarte.class='imgCarte';
	lienCarte.src ='liste_clients_nouveaux/anthonioz_louis/maps2.png';

	document.getElementById('carte2').appendChild(lienCarte);


/*ici on crée la fonction click qui va s'actier en cliquant sur "afficher la carte" l'activation de
cette fonction va actier la fonction displayImg()*/

nouveauLien.addEventListener('click', function(e){
e.preventDefault();
displayImg(e.currentTarget);

});

/*la fonction displayImg permet de charger la carte grace à la l'outil load */

function displayImg(lien){
	 img=new Image();
	overlay = document.getElementById('overlay');

	  img.addEventListener('load', function() {
        overlay.innerHTML = '';
        overlay.appendChild(img);
    });


    img.src = lienCarte.src;
    overlay.style.display = 'block';
    overlay.innerHTML = '<span>Chargement en cours...</span>';

}

document.getElementById('overlay').addEventListener('click', function(e) {
    // currentTarget est utilisé pour cibler l'overlay et non l'image
    e.currentTarget.style.display = 'none';
});
}
	


/**/
/**/
/*function envoyermail pour afficher la page 5
en appuyant sur envoyermail on déclenche la fonction
*/
/**/
/**/

function envoyerMail(){
	document.getElementById('fifthStep').style.display = "block";
	document.getElementById('sendMail').style.display="none";
	document.getElementById('fourthStep').style.display="none";
}


/**/
/**/        
/* fonction qui permet de joindre un fichier en faisant 
apparaitre le block joindre un fichier */
/**/
/**/


function choisirFichier(){
	joindre= document.getElementById('joindre');
	joindre.style.display= "block";

}






/**/
/**/
/* fonction pour permet de télécharger le ficher choisi par 
l'admi et de le placer dans le dossier'farmingData*/
/**/
/**/

function telechargerFichier(){

	var pacDone = false;
	var pacFile;

	 $('#joindre').on('change', function(){
    var files = $(this).get(0).files;
    if (files.length > 0){
      // create a FormData object which will be sent as the data payload in the
      // AJAX request
       pacFile = files[0].name;
      var formData = new FormData();



	 for (var i = 0; i < files.length; i++) {
        var file = files[i];

        // add the files to formData object for the data payload
        formData.append('uploads[]', file, file.name);
      }

     

      $.ajax({
        url: '/upload',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(data){
        },
        xhr: function() {
          // create an XMLHttpRequest
          var xhr = new XMLHttpRequest();

          // listen to the 'progress' event
          xhr.upload.addEventListener('progress', function(evt) {

            if (evt.lengthComputable) {
              pacDone = true;
            }
          }, false);
          return xhr;
        }
      });


	}
});
	}


/**/
/**/
/*fonction qui créer la liste déroulante des client 
en se servant du table listeClient
cela permet à l'administrateur de choisir le client qu'il souhaite*/
/**/
/**/


 
	function faireLaListe(){


	deroulo = document.getElementById('deroulo');
		
	var length= listeClient.length;
	ajouterClient=[];
	


	for (var i=0; i<length; i++){

	ajouterClient[i]= document.createElement('option');
	ajouterClient[i].id= listeClient[i];
	deroulo.appendChild(ajouterClient[i]);
	var ajouterClientText = document.createTextNode(listeClient[i]);
	ajouterClient[i].appendChild(ajouterClientText);


}
}


/**/
/**/
/*fonction qui supprime le client de la liste
 et le rajoute en fin de la liste*/
/**/
/**/


function mettreClientBoutListe(){


	nomClient= nouveauClient; 
	alert(nomClient);

	var i =0;

	while (listeClient[i]!== nomClient){
		i++;

	}
		

			listeClient.splice(i,1);
			listeClient.push(nomClient);
			alert(listeClient);

			supprimerLaListe();
	}

/**/
/**/
/*fonction qui supprime le client de la liste déroulante 
et le remet en bas de cette liste*/
/**/
/**/


function supprimerLaListe(){

	deroulo = document.getElementById('deroulo');
	var length = listeClient.length;
	for (var i=0; i<length; i++){
		var listeClientEnfant= document.getElementById(listeClient[i]);
		deroulo.removeChild(listeClientEnfant);

		alert('le client à été traité');
		

	}
}




