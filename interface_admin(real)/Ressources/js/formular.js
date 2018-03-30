

/*on récupère le mot de passe écrit par l'admi 
grace à document.getElementById*/

var mdp = document.getElementById("password").value;

/* on crée une variable test qui est la valeur correcte
 du mot de passe*/

var test = test;

/*fonction qui test la compatibilité du mdp écrit par l'admi
la fonction est déclenché lorsque l'admi appuie sur le boutton OK 
à coté du block mot de passe
.style.display= "block" permet d'afficher l'élément
.style.display= "none" permet de cacher l'élément 
il faut dans un premier temps les afficher ou les cacher dans le css */

function goSecondStep(){
	if (mdp == test){
		document.getElementById('thirdStep').style.display = "block";
		document.getElementById('firstStep').style.display = "none";
		
	}
	else{
		alert("mot de passe incorrect");
	}	
}

/* rechercheNouveau: fonction qui permet de passer sur la 4e page
 si on click sur ok lors de la recherche nouveau client
de plus elle fait apparaitre le nom et prénom du client
 en haut à gauche. Si l'entrez est vide la fonction renvoie 
 un message d'erreur */

function rechercheNouveau(){

	var nouveauClient = document.getElementById('nouveauClient').value;
	
	if (nouveauClient != '' ){
	
	document.getElementById('fourthStep').style.display = "block";
	document.getElementById('thirdStep').style.display= "none";
	
	

	var nouveauNom = document.createTextNode(nouveauClient);
	document.getElementById('nomPrenom').appendChild(nouveauNom);
	


	
	


		}else { 
		alert("vous devez entrer le nom et le prénom d'un client");

	}
	
}


/*rechercheNouveau: fonction qui permet de passer sur la 4e page 
si on click sur ok lors de la recherche client ancien.
 de plus elle fait apparaitre le nom et prénom du client
  en haut à gauche. Si l'entrez est vide la fonction renvoie 
  un message d'erreur*/

function rechercheAncien(){

	var clientTraite=document.getElementById('clientTraite').value;
	
	if (clientTraite != '' ){

	var clientTraite = document.getElementById('clientTraite').value;
	document.getElementById('fourthStep').style.display = "block";
	document.getElementById('thirdStep').style.display= "none";

	

	var nom = document.getElementById('nomPrenom');

	var nomText= document.createTextNode(clientTraite);
	nom.appendChild(nomText);

	}else { 
		alert("vous devez entrer le nom et le prénom d'un client");

	}

}



/*permet de revenir sur la 3e page
 supprime tout les éléments effectuer sur la 4e page(pas encore fait)
 la fonction se décleche en appuyant sur le boutton retour du html*/

function retour(){
	document.getElementById('fourthStep').style.display = "none";
	document.getElementById('thirdStep').style.display= "block";
    document.getElementById('nouveauClient').value= null; 
	
	

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


function elementDossierNouveau(){
	var lienDossier= document.createElement('a');
	lienDossier.id='lienDossier';
	lienDossier.href = 'http://www.siteduzero.com';

	document.getElementById('elementDossier').appendChild(lienDossier);

	var lienDossierText = document.createTextNode("son Dossier");
	lienDossier.appendChild(lienDossierText);


}

/*idem que audessus la différence c'est que pour l'activer 
il faut rechercher un client ancien sur la page html*/


function elementDossierAncien(){

	var lienDossier= document.createElement('a');
	lienDossier.id='lienDossier';
	lienDossier.href = 'http://www.siteduzero.com';

	document.getElementById('elementDossier').appendChild(lienDossier);

	var lienDossierText = document.createTextNode("son Dossier");
	lienDossier.appendChild(lienDossierText);

}





/*permet d télécharger la carte du client et de l'afficher sur la page
 de plus elle insere un lien qui permet d'obtenir la carte en grand 
 si on click dessus et de revenir normal en appuyant ailleurs
 */



function lesCartesNouveau(){

/*la première partie permet de créer un lien qui permettra d'agrandir la carte
lorsqu'on apuyera sur "afficher en grand" */
	var nouveauLien = document.createElement('a');
nouveauLien.id='nouveauLien';
nouveauLien.href = 'afficherCarte';
document.getElementById('cartes').appendChild(nouveauLien);

var nouveauLienText = document.createTextNode("afficher en grand");
nouveauLien.appendChild(nouveauLienText);

/*la deuxième partie permet d'afficher la carte sur la page
dans le css on limite la taille de la carte pour qu'elle reste petite
*/

	var lienCarte= document.createElement('img');
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
	var img=new Image();
	var overlay = document.getElementById('overlay');

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
	


/*ici mê^me pricipe qu'au dessus la différence est du coté html
 c'est la recherche client ancien qui le déclenche*/

function lesCartesAncien(){


var nouveauLien = document.createElement('a');
nouveauLien.id='nouveauLien';
nouveauLien.href = 'afficherCarte';
document.getElementById('cartes').appendChild(nouveauLien);

var nouveauLienText = document.createTextNode("afficher en grand");
nouveauLien.appendChild(nouveauLienText);




	var lienCarte= document.createElement('img');
	lienCarte.id='lienCarte';
	lienCarte.class='imgCarte';
	lienCarte.src ='liste_clients_nouveaux/anthonioz_louis/maps2.png';

	document.getElementById('carte2').appendChild(lienCarte);








nouveauLien.addEventListener('click', function(e){
e.preventDefault();
displayImg(e.currentTarget);

});

function displayImg(lien){
	var img=new Image();
	var overlay = document.getElementById('overlay');

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
	

/*function envoyermail pour afficher la page 5
en appuyant sur envoyermail on déclenche la fonction
*/

function envoyerMail(){
	document.getElementById('fifthStep').style.display = "block";
	document.getElementById('sendMail').style.display="none";
}
        
