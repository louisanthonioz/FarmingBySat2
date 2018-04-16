
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



var joindre;

var listeClient = ['a','b','c','d','e','f','g','h','i','j','k'];
var ajouterClient;

var deroulo;
var nomClient;





/*on récupère les éléments du HTML avec document.getElementByID('id'); */




/*fonction qui test la compatibilité du mdp écrit par l'admi
la fonction est déclenché lorsque l'admi appuie sur le boutton OK 
à coté du block mot de passe
.style.display= "block" permet d'afficher l'élément
.style.display= "none" permet de cacher l'élément 
il faut dans un premier temps les afficher 
pour cacher un élément par défaut dans le fichier code css:"" display:none" */

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

		
		alert('Les éléments de la page ont été supprimé');
	

	}

	/*permet de revenir sur la 3e page
 supprime tout les éléments créés sur la 4e page(pas encore fait)
 la fonction se décleche en appuyant sur le boutton retour du html*/
	

function retour(){
	document.getElementById('fourthStep').style.display = "none";
	document.getElementById('secondStep').style.display= "block";
	document.getElementById('renseignementClientPage2').style.display='none';
	supprimerBaseDeDonneesClient();


}




/*function retour2 permet de revenir à la page4: 
*/

function retour2(){
	document.getElementById('fifthStep').style.display = "none";
	document.getElementById('fourthStep').style.display= "block";
    document.getElementById('sendMail').style.display="block";
	document.getElementById('pageCarte').style.display = "none";
	document.getElementById('renseignementClientPage1').style.display = 'block';
	document.getElementById('renseignementClientPage2').style.display = "none";
  	document.getElementById('informationsAgricolesClient').style.display="block";
  	document.getElementById('informationsPersonnellesClient').style.display="block";
  	document.getElementById('retour').style.display="block";
		



	/*on appelle la fonction qui supprime les fichiers joint 
	et la fonction qui supprime les élémens de la page5*/
	supprimerDonnees();

}

function retourCarte(){

	document.getElementById('fourthStep').style.display= "block";
    document.getElementById('sendMail').style.display="block";
	document.getElementById('pageCarte').style.display = "none";
	document.getElementById('renseignementClientPage1').style.display = 'block';
	document.getElementById('renseignementClientPage2').style.display = "none";
  	document.getElementById('informationsAgricolesClient').style.display="block";
  	document.getElementById('informationsPersonnellesClient').style.display="block";
  	document.getElementById('retour').style.display="block";
		


}

	function element5(){

  /*fonction pour suppprimer les éléments de la page 5:
 le texte, les adresses...*/

	
		alert('les pièces jointes ont été supprimé');

	}

	





/*permet de télécharger la carte du client et de l'afficher sur la page
 de plus elle insere un lien qui permet d'obtenir la carte en grand 
 si on click dessus et de revenir normal en appuyant ailleurs
 */



function lesCartesNouveau(){

/*la première partie permet de créer un lien qui permettra d'agrandir la carte
lorsqu'on apuyera sur "afficher en grand" */


/*Pour créer un lien en javascrit:  
1. on crée un élément lien caractérisé par la borne <a> avec document.createElement(element)
2. on lui donne un id : element.id='nom id'
3. on lui donne son href (l'adresse du lien) : element.href='direction du lien'
4. on utilise appendChild pour insère l'élément enfant (élément a)qu'on vient de créer
 dans son élément parent (l'élément qui le recouvre)
5. on crée le text avec document.createtextNode('text') ce sera le text sur lequel on appuie pour déclencher le lien
6. on insère se text dans l'élément <a> grace à la fonction appendChild  */

/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
/**/
	
	alert(nouveauClient);

	carteClientNDVI();
	carteClientMCARI();
	carteClientMTVI2();
	carteClientBI();
	carteClientGI();
	carteClientWI();
	carteClientVTCI();
	carteClientDEM();
	carteClientCTI();

}
/**/
/**/
/**/
/*on insère la carte NDVI */
/**/
/**/
/**/

function carteClientNDVI(){
/*on crée le nom de la carte : client_indice*/
	var nouveauTextNDVI = document.createElement('p');
	nouveauTextNDVI.id='nouveauTextNDVI';
	document.getElementById('carteNDVI').appendChild(nouveauTextNDVI);

	var nouveauTextTextNDVI = document.createTextNode(nouveauClient+'_NDVI');
	nouveauTextNDVI.appendChild(nouveauTextTextNDVI);

/**/
/**/
/**/
/*on crée le lien pour grandir la carte*/
/**/
/**/
/**/
	var nouveauLienNDVI = document.createElement('a');
	nouveauLienNDVI.id='nouveauLienNDVI';
	nouveauLienNDVI.href = 'afficherCarteNDVI';
	document.getElementById('carteNDVI').appendChild(nouveauLienNDVI);

	var nouveauLienTextNDVI = document.createTextNode("afficher en grand");
	nouveauLienNDVI.appendChild(nouveauLienTextNDVI);

/**/
/**/
/**/
/* permet d'afficher la carte sur la page dans le css 
on limite la taille de la carte pour qu'elle reste petite
*/
/**/
/**/
/**/

	var lienCarteNDVI= document.createElement('img');
	lienCarteNDVI.id='lienCarteNDVI';
	lienCarteNDVI.class='imgCarte';
	lienCarteNDVI.src ='farmingData/'+nouveauClient+'/'+nouveauClient+'_NDVI.jpg';

	document.getElementById('carteNDVI').appendChild(lienCarteNDVI);


/*ici on crée la fonction click qui va s'activer en cliquant sur "afficher la carte" l'activation de
cette fonction va actier la fonction displayImg()
c'est une fonction toute faite*/

nouveauLienNDVI.addEventListener('click', function(e){
e.preventDefault();
displayImg(e.currentTarget);

});

/*la fonction displayImg permet de charger la carte grace à l'outil load */

function displayImg(lien){
	var img=new Image();
	var overlay = document.getElementById('overlay');

	  img.addEventListener('load', function() {
        overlay.innerHTML = '';
        overlay.appendChild(img);
    });


    img.src = lienCarteNDVI.src;
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
/**/

/**/
/**/
/**/
/*on insère la carte MCARI*/
/**/
/**/
/**/


function carteClientMCARI(){

	/*on crée le nom de la carte : client_indice*/

	var nouveauTextMCARI = document.createElement('p');
	nouveauTextMCARI.id='nouveauTextMCARI';
	document.getElementById('carteMCARI').appendChild(nouveauTextMCARI);

	var nouveauTextTextMCARI = document.createTextNode(nouveauClient+'_MCARI');
	nouveauTextMCARI.appendChild(nouveauTextTextMCARI);

/**/
/**/
/**/
/*on crée le lien pour grandir la carte*/
/**/
/**/
/**/
	var nouveauLienMCARI = document.createElement('a');
	nouveauLienMCARI.id='nouveauLienMCARI';
	nouveauLienMCARI.href = 'afficherCarteMCARI';
	document.getElementById('carteMCARI').appendChild(nouveauLienMCARI);

	var nouveauLienTextMCARI = document.createTextNode("afficher en grand");
	nouveauLienMCARI.appendChild(nouveauLienTextMCARI);

/**/
/**/
/**/
/* permet d'afficher la carte sur la page dans le css 
on limite la taille de la carte pour qu'elle reste petite
*/
/**/
/**/
/**/

	var lienCarteMCARI= document.createElement('img');
	lienCarteMCARI.id='lienCarteMCARI';
	lienCarteMCARI.class='imgCarte';
	lienCarteMCARI.src ='farmingData/'+nouveauClient+'/'+nouveauClient+'_MCARI.jpg';

	document.getElementById('carteMCARI').appendChild(lienCarteMCARI);


/*ici on crée la fonction click qui va s'activer en cliquant sur "afficher la carte" l'activation de
cette fonction va actier la fonction displayImg()
c'est une fonction toute faite*/

nouveauLienMCARI.addEventListener('click', function(e){
e.preventDefault();
displayImg(e.currentTarget);

});

/*la fonction displayImg permet de charger la carte grace à l'outil load */

function displayImg(lien){
	var img=new Image();
	var overlay = document.getElementById('overlay');

	  img.addEventListener('load', function() {
        overlay.innerHTML = '';
        overlay.appendChild(img);
    });


    img.src = lienCarteMCARI.src;
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
/**/
/* on insère la carte MTVI2*/
/**/
/**/


function carteClientMTVI2(){}
	

	function carteClientMTVI2(){
/*on crée le nom de la carte : client_indice*/
	var nouveauTextMTVI2 = document.createElement('p');
	nouveauTextMTVI2.id='nouveauTextMTVI2';
	document.getElementById('carteMTVI2').appendChild(nouveauTextMTVI2);

	var nouveauTextTextMTVI2 = document.createTextNode(nouveauClient+'_MTVI2');
	nouveauTextMTVI2.appendChild(nouveauTextTextMTVI2);

/**/
/**/
/**/
/*on crée le lien pour grandir la carte*/
/**/
/**/
/**/
	var nouveauLienMTVI2 = document.createElement('a');
	nouveauLienMTVI2.id='nouveauLienMTVI2';
	nouveauLienMTVI2.href = 'afficherCarteMTVI2';
	document.getElementById('carteMTVI2').appendChild(nouveauLienMTVI2);

	var nouveauLienTextMTVI2 = document.createTextNode("afficher en grand");
	nouveauLienMTVI2.appendChild(nouveauLienTextMTVI2);

/**/
/**/
/**/
/* permet d'afficher la carte sur la page dans le css 
on limite la taille de la carte pour qu'elle reste petite
*/
/**/
/**/
/**/

	var lienCarteMTVI2= document.createElement('img');
	lienCarteMTVI2.id='lienCarteMTVI2';
	lienCarteMTVI2.class='imgCarte';
	lienCarteMTVI2.src ='farmingData/'+nouveauClient+'/'+nouveauClient+'_MTVI2.jpg';

	document.getElementById('carteMTVI2').appendChild(lienCarteMTVI2);


/*ici on crée la fonction click qui va s'activer en cliquant sur "afficher la carte" l'activation de
cette fonction va actier la fonction displayImg()
c'est une fonction toute faite*/

nouveauLienMTVI2.addEventListener('click', function(e){
e.preventDefault();
displayImg(e.currentTarget);

});

/*la fonction displayImg permet de charger la carte grace à l'outil load */

function displayImg(lien){
	var img=new Image();
	var overlay = document.getElementById('overlay');

	  img.addEventListener('load', function() {
        overlay.innerHTML = '';
        overlay.appendChild(img);
    });


    img.src = lienCarteMTVI2.src;
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
/*on insère la carte BI*/
/**/
/**/


function carteClientBI()
{
	/*on crée le nom de la carte : client_indice*/
	var nouveauTextBI = document.createElement('p');
	nouveauTextBI.id='nouveauTextBI';
	document.getElementById('carteBI').appendChild(nouveauTextBI);

	var nouveauTextTextBI = document.createTextNode(nouveauClient+'_BI');
	nouveauTextBI.appendChild(nouveauTextTextBI);

/**/
/**/
/**/
/*on crée le lien pour grandir la carte*/
/**/
/**/
/**/
	var nouveauLienBI = document.createElement('a');
	nouveauLienBI.id='nouveauLienBI';
	nouveauLienBI.href = 'afficherCarteBI';
	document.getElementById('carteBI').appendChild(nouveauLienBI);

	var nouveauLienTextBI = document.createTextNode("afficher en grand");
	nouveauLienBI.appendChild(nouveauLienTextBI);

/**/
/**/
/**/
/* permet d'afficher la carte sur la page dans le css 
on limite la taille de la carte pour qu'elle reste petite
*/
/**/
/**/
/**/

	var lienCarteBI= document.createElement('img');
	lienCarteBI.id='lienCarteBI';
	lienCarteBI.class='imgCarte';
	lienCarteBI.src ='farmingData/'+nouveauClient+'/'+nouveauClient+'_BI.jpg';

	document.getElementById('carteBI').appendChild(lienCarteBI);


/*ici on crée la fonction click qui va s'activer en cliquant sur "afficher la carte" l'activation de
cette fonction va actier la fonction displayImg()
c'est une fonction toute faite*/

nouveauLienBI.addEventListener('click', function(e){
e.preventDefault();
displayImg(e.currentTarget);

});

/*la fonction displayImg permet de charger la carte grace à l'outil load */

function displayImg(lien){
	var img=new Image();
	var overlay = document.getElementById('overlay');

	  img.addEventListener('load', function() {
        overlay.innerHTML = '';
        overlay.appendChild(img);
    });


    img.src = lienCarteBI.src;
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

/**/
/**/
/*on insère carteClientGI()*/
/**/
/**/


function carteClientGI(){

	/*on crée le nom de la carte : client_indice*/
	var nouveauTextGI = document.createElement('p');
	nouveauTextGI.id='nouveauTextGI';
	document.getElementById('carteGI').appendChild(nouveauTextGI);

	var nouveauTextTextGI = document.createTextNode(nouveauClient+'_GI');
	nouveauTextGI.appendChild(nouveauTextTextGI);

/**/
/**/
/**/
/*on crée le lien pour grandir la carte*/
/**/
/**/
/**/
	var nouveauLienGI = document.createElement('a');
	nouveauLienGI.id='nouveauLienGI';
	nouveauLienGI.href = 'afficherCarteGI';
	document.getElementById('carteGI').appendChild(nouveauLienGI);

	var nouveauLienTextGI = document.createTextNode("afficher en grand");
	nouveauLienGI.appendChild(nouveauLienTextGI);

/**/
/**/
/**/
/* permet d'afficher la carte sur la page dans le css 
on limite la taille de la carte pour qu'elle reste petite
*/
/**/
/**/
/**/

	var lienCarteGI= document.createElement('img');
	lienCarteGI.id='lienCarteGI';
	lienCarteGI.class='imgCarte';
	lienCarteGI.src ='farmingData/'+nouveauClient+'/'+nouveauClient+'_GI.jpg';

	document.getElementById('carteGI').appendChild(lienCarteGI);


/*ici on crée la fonction click qui va s'activer en cliquant sur "afficher la carte" l'activation de
cette fonction va actier la fonction displayImg()
c'est une fonction toute faite*/

nouveauLienGI.addEventListener('click', function(e){
e.preventDefault();
displayImg(e.currentTarget);

});

/*la fonction displayImg permet de charger la carte grace à l'outil load */

function displayImg(lien){
	var img=new Image();
	var overlay = document.getElementById('overlay');

	  img.addEventListener('load', function() {
        overlay.innerHTML = '';
        overlay.appendChild(img);
    });


    img.src = lienCarteGI.src;
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
/*on insère carteClientWI()*/
/**/
/**/


function carteClientWI(){

	/*on crée le nom de la carte : client_indice*/
	var nouveauTextWI = document.createElement('p');
	nouveauTextWI.id='nouveauTextWI';
	document.getElementById('carteWI').appendChild(nouveauTextWI);

	var nouveauTextTextWI = document.createTextNode(nouveauClient+'_WI');
	nouveauTextWI.appendChild(nouveauTextTextWI);

/**/
/**/
/**/
/*on crée le lien pour grandir la carte*/
/**/
/**/
/**/
	var nouveauLienWI = document.createElement('a');
	nouveauLienWI.id='nouveauLienWI';
	nouveauLienWI.href = 'afficherCarteWI';
	document.getElementById('carteWI').appendChild(nouveauLienWI);

	var nouveauLienTextWI = document.createTextNode("afficher en grand");
	nouveauLienWI.appendChild(nouveauLienTextWI);

/**/
/**/
/**/
/* permet d'afficher la carte sur la page dans le css 
on limite la taille de la carte pour qu'elle reste petite
*/
/**/
/**/
/**/

	var lienCarteWI= document.createElement('img');
	lienCarteWI.id='lienCarteWI';
	lienCarteWI.class='imgCarte';
	lienCarteWI.src ='farmingData/'+nouveauClient+'/'+nouveauClient+'_WI.jpg';

	document.getElementById('carteWI').appendChild(lienCarteWI);


/*ici on crée la fonction click qui va s'activer en cliquant sur "afficher la carte" l'activation de
cette fonction va actier la fonction displayImg()
c'est une fonction toute faite*/

nouveauLienWI.addEventListener('click', function(e){
e.preventDefault();
displayImg(e.currentTarget);

});

/*la fonction displayImg permet de charger la carte grace à l'outil load */

function displayImg(lien){
	var img=new Image();
	var overlay = document.getElementById('overlay');

	  img.addEventListener('load', function() {
        overlay.innerHTML = '';
        overlay.appendChild(img);
    });


    img.src = lienCarteWI.src;
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

/**/
/*on insère carteClientVTCI()*/
/**/
/**/


function carteClientVTCI(){

	/*on crée le nom de la carte : client_indice*/
	var nouveauTextVTCI = document.createElement('p');
	nouveauTextVTCI.id='nouveauTextVTCI';
	document.getElementById('carteVTCI').appendChild(nouveauTextVTCI);

	var nouveauTextTextVTCI = document.createTextNode(nouveauClient+'_VTCI');
	nouveauTextVTCI.appendChild(nouveauTextTextVTCI);

/**/
/**/
/**/
/*on crée le lien pour grandir la carte*/
/**/
/**/
/**/
	var nouveauLienVTCI = document.createElement('a');
	nouveauLienVTCI.id='nouveauLienVTCI';
	nouveauLienVTCI.href = 'afficherCarteVTCI';
	document.getElementById('carteVTCI').appendChild(nouveauLienVTCI);

	var nouveauLienTextVTCI = document.createTextNode("afficher en grand");
	nouveauLienVTCI.appendChild(nouveauLienTextVTCI);

/**/
/**/
/**/
/* permet d'afficher la carte sur la page dans le css 
on limite la taille de la carte pour qu'elle reste petite
*/
/**/
/**/
/**/

	var lienCarteVTCI= document.createElement('img');
	lienCarteVTCI.id='lienCarteVTCI';
	lienCarteVTCI.class='imgCarte';
	lienCarteVTCI.src ='farmingData/'+nouveauClient+'/'+nouveauClient+'_VTCI.jpg';

	document.getElementById('carteVTCI').appendChild(lienCarteVTCI);


/*ici on crée la fonction click qui va s'activer en cliquant sur "afficher la carte" l'activation de
cette fonction va actier la fonction displayImg()
c'est une fonction toute faite*/

nouveauLienVTCI.addEventListener('click', function(e){
e.preventDefault();
displayImg(e.currentTarget);

});

/*la fonction displayImg permet de charger la carte grace à l'outil load */

function displayImg(lien){
	var img=new Image();
	var overlay = document.getElementById('overlay');

	  img.addEventListener('load', function() {
        overlay.innerHTML = '';
        overlay.appendChild(img);
    });


    img.src = lienCarteVTCI.src;
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




/**/
/**/
/*on insère carteClientDEM()*/
/**/
/**/


function carteClientDEM(){

	/*on crée le nom de la carte : client_indice*/
	var nouveauTextDEM = document.createElement('p');
	nouveauTextDEM.id='nouveauTextDEM';
	document.getElementById('carteDEM').appendChild(nouveauTextDEM);

	var nouveauTextTextDEM = document.createTextNode(nouveauClient+'_DEM');
	nouveauTextDEM.appendChild(nouveauTextTextDEM);

/**/
/**/
/**/
/*on crée le lien pour grandir la carte*/
/**/
/**/
/**/
	var nouveauLienDEM = document.createElement('a');
	nouveauLienDEM.id='nouveauLienDEM';
	nouveauLienDEM.href = 'afficherCarteDEM';
	document.getElementById('carteDEM').appendChild(nouveauLienDEM);

	var nouveauLienTextDEM = document.createTextNode("afficher en grand");
	nouveauLienDEM.appendChild(nouveauLienTextDEM);

/**/
/**/
/**/
/* permet d'afficher la carte sur la page dans le css 
on limite la taille de la carte pour qu'elle reste petite
*/
/**/
/**/
/**/

	var lienCarteDEM= document.createElement('img');
	lienCarteDEM.id='lienCarteDEM';
	lienCarteDEM.class='imgCarte';
	lienCarteDEM.src ='farmingData/'+nouveauClient+'/'+nouveauClient+'_DEM.jpg';

	document.getElementById('carteDEM').appendChild(lienCarteDEM);


/*ici on crée la fonction click qui va s'activer en cliquant sur "afficher la carte" l'activation de
cette fonction va actier la fonction displayImg()
c'est une fonction toute faite*/

nouveauLienDEM.addEventListener('click', function(e){
e.preventDefault();
displayImg(e.currentTarget);

});

/*la fonction displayImg permet de charger la carte grace à l'outil load */

function displayImg(lien){
	var img=new Image();
	var overlay = document.getElementById('overlay');

	  img.addEventListener('load', function() {
        overlay.innerHTML = '';
        overlay.appendChild(img);
    });


    img.src = lienCarteDEM.src;
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





/**/
/**/
/*on insère carteClientCTI()*/
/**/
/**/


function carteClientCTI(){


/*on crée le nom de la carte : client_indice*/
	var nouveauTextCTI = document.createElement('p');
	nouveauTextCTI.id='nouveauTextCTI';
	document.getElementById('carteCTI').appendChild(nouveauTextCTI);

	var nouveauTextTextCTI = document.createTextNode(nouveauClient+'_CTI');
	nouveauTextCTI.appendChild(nouveauTextTextCTI);

/**/
/**/
/**/
/*on crée le lien pour grandir la carte*/
/**/
/**/
/**/
	var nouveauLienCTI = document.createElement('a');
	nouveauLienCTI.id='nouveauLienCTI';
	nouveauLienCTI.href = 'afficherCarteCTI';
	document.getElementById('carteCTI').appendChild(nouveauLienCTI);

	var nouveauLienTextCTI = document.createTextNode("afficher en grand");
	nouveauLienCTI.appendChild(nouveauLienTextCTI);

/**/
/**/
/**/
/* permet d'afficher la carte sur la page dans le css 
on limite la taille de la carte pour qu'elle reste petite
*/
/**/
/**/
/**/

	var lienCarteCTI= document.createElement('img');
	lienCarteCTI.id='lienCarteCTI';
	lienCarteCTI.class='imgCarte';
	lienCarteCTI.src ='farmingData/'+nouveauClient+'/'+nouveauClient+'_CTI.jpg';

	document.getElementById('carteCTI').appendChild(lienCarteCTI);


/*ici on crée la fonction click qui va s'activer en cliquant sur "afficher la carte" l'activation de
cette fonction va actier la fonction displayImg()
c'est une fonction toute faite*/

nouveauLienCTI.addEventListener('click', function(e){
e.preventDefault();
displayImg(e.currentTarget);

});

/*la fonction displayImg permet de charger la carte grace à l'outil load */

function displayImg(lien){
	var img=new Image();
	var overlay = document.getElementById('overlay');

	  img.addEventListener('load', function() {
        overlay.innerHTML = '';
        overlay.appendChild(img);
    });


    img.src = lienCarteCTI.src;
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

/**/
/*on supprimer les cartes du client 
lorsque l'utilisateur quite la page du client*/
/**/

function supprimerCartesClient(){

	/*on supprime la carte NDVI*/

		var carteNDVIEnfant= document.getElementById('lienCarteNDVI');
		var lienNDVIEnfant= document.getElementById('nouveauLienNDVI');
		var textEnfantNDVI = document.getElementById('nouveauTextNDVI');
		var carteNDVIParent = document.getElementById('carteNDVI');
		carteNDVIParent.removeChild(carteNDVIEnfant);	
		carteNDVIParent.removeChild(lienNDVIEnfant);
		carteNDVIParent.removeChild(textEnfantNDVI);

	/*on supprime la carte MCARI*/

		var carteMCARIEnfant= document.getElementById('lienCarteMCARI');
		var lienMCARIEnfant= document.getElementById('nouveauLienMCARI');
		var textEnfantMCARI= document.getElementById('nouveauTextMCARI');
		var carteMCARIParent = document.getElementById('carteMCARI');
		carteMCARIParent.removeChild(carteMCARIEnfant);	
		carteMCARIParent.removeChild(lienMCARIEnfant);
		carteMCARIParent.removeChild(textEnfantMCARI);			
		

	
		/*on supprime la carte BI*/

		var carteBIEnfant= document.getElementById('lienCarteBI');
		var lienBIEnfant= document.getElementById('nouveauLienBI');
		var textEnfantBI= document.getElementById('nouveauTextBI');
		var carteBIParent = document.getElementById('carteBI');
		carteBIParent.removeChild(carteBIEnfant);	
		carteBIParent.removeChild(lienBIEnfant);
		carteBIParent.removeChild(textEnfantBI);			
		
			/*on supprime la carte GI*/

		var carteGIEnfant= document.getElementById('lienCarteGI');
		var lienGIEnfant= document.getElementById('nouveauLienGI');
		var textEnfantGI= document.getElementById('nouveauTextGI');
		var carteGIParent = document.getElementById('carteGI');
		carteGIParent.removeChild(carteGIEnfant);	
		carteGIParent.removeChild(lienGIEnfant);
		carteGIParent.removeChild(textEnfantGI);			
		


	/*on supprime la carte WI*/

		var carteWIEnfant= document.getElementById('lienCarteWI');
		var lienWIEnfant= document.getElementById('nouveauLienWI');
		var textEnfantWI= document.getElementById('nouveauTextWI');
		var carteWIParent = document.getElementById('carteWI');
		carteWIParent.removeChild(carteWIEnfant);	
		carteWIParent.removeChild(lienWIEnfant);
		carteWIParent.removeChild(textEnfantWI);			
		

			/*on supprime la carte VTCI*/

		var carteVTCIEnfant= document.getElementById('lienCarteVTCI');
		var lienVTCIEnfant= document.getElementById('nouveauLienVTCI');
		var textEnfantVTCI= document.getElementById('nouveauTextVTCI');
		var carteVTCIParent = document.getElementById('carteVTCI');
		carteVTCIParent.removeChild(carteVTCIEnfant);	
		carteVTCIParent.removeChild(lienVTCIEnfant);
		carteVTCIParent.removeChild(textEnfantVTCI);			
		

	
		/*on supprime la carte CTI*/

		var carteCTIEnfant= document.getElementById('lienCarteCTI');
		var lienCTIEnfant= document.getElementById('nouveauLienCTI');
		var textEnfantCTI= document.getElementById('nouveauTextCTI');
		var carteCTIParent = document.getElementById('carteCTI');
		carteCTIParent.removeChild(carteCTIEnfant);	
		carteCTIParent.removeChild(lienCTIEnfant);
		carteCTIParent.removeChild(textEnfantCTI);			
		

			/*on supprime la carte MTVI2*/

		var carteMTVI2Enfant= document.getElementById('lienCarteMTVI2');
		var lienMTVI2Enfant= document.getElementById('nouveauLienMTVI2');
		var textEnfantMTVI2= document.getElementById('nouveauTextMTVI2');
		var carteMTVI2Parent = document.getElementById('carteMTVI2');
			
		carteMTVI2Parent.removeChild(lienMTVI2Enfant);
		carteMTVI2Parent.removeChild(textEnfantMTVI2);			
		carteMTVI2Parent.removeChild(carteMTVI2Enfant);

			/*on supprime la carte DEM*/

		var carteDEMEnfant= document.getElementById('lienCarteDEM');
		var lienDEMEnfant= document.getElementById('nouveauLienDEM');
		var textEnfantDEM= document.getElementById('nouveauTextDEM');
		var carteDEMParent = document.getElementById('carteDEM');
		carteDEMParent.removeChild(carteDEMEnfant);	
		carteDEMParent.removeChild(lienDEMEnfant);
		carteDEMParent.removeChild(textEnfantDEM);			
		


}
/**/
/**/
/**/










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
l'admi et de le placer dans le dossier'farmingData
On utilise une fonction ajax, fonction toute faite*/
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
cela permet à l'administrateur de choisir le client qu'il souhaite dans la liste*/
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
/*fonction qui supprime le client du tableau
 et le rajoute au bout du tableau. Le tableau est présent dans le javascript,
 dans le html c'est une liste déroulante. 
 Il faudra ensuite actualiser la liste déroulante ce qui se fait automatiquement losqu'on recharge la page
 1.on récupère son nom nom dans la liste en faisant une boucle
 2.on le supprime de la liste en utilisant la fonction  tableau.splice('indice', nombre d'élément à supprimer)
 3. on l'ajoute de nouveau en bas de la liste en utilisant la fonction tableau.push('element')*/
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
/*fonction qui supprime le client de la liste déroulante.Permet d'actualiser la liste déroulante */
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

/**/
/**/
/**/
/*fonction qui montre le block résultat*/
/**/
/**/
/**/


function voirResultat(){

	document.getElementById('resultat').style.display="block";
	document.getElementById('validerChoix').style.display='none';
	document.getElementById('recommencer').style.display='block';
}

/**/
/**/
/*fonction pour supprimer le resultat
on utilise la fonction remveChild
marche uniquement pour enlever un élément enfant d'un élément parent*/
/**/
/**/

function recommencer(){

	/*on supprime la plante1*/

		var resultatParent=document.getElementById('resultat');
		var plante1Enfant=document.getElementById('plante1');

		resultatParent.removeChild(plante1Enfant);

	/*on supprime la plante2*/

		var resultatParent=document.getElementById('resultat');
		var plante2Enfant=document.getElementById('plante2');

		resultatParent.removeChild(plante2Enfant);

	/*on supprime la plante3*/

		var resultatParent=document.getElementById('resultat');
		var plante3Enfant=document.getElementById('plante3');

		resultatParent.removeChild(plante3Enfant);

		document.getElementById('validerChoix').style.display='block';
		document.getElementById('recommencer').style.display='none';
		document.getElementById('resultat').style.display='none';

		}























/**/
/**/
/*fonction qui affiche les resultat sur la page
de résultat
il faut créer tous les cas possibles 
il y a 75 cas différent, 75 fonction if{}*/
/**/
/**/


function afficherResultat(){



	var quantiteAzote= document.getElementById('quantiteAzote').value;
	var quantiteCarbone= document.getElementById('quantiteCarbone').value;
	var compaction= document.getElementById('compaction').value;
	alert(quantiteCarbone +' '+ quantiteAzote +' '+ compaction);
		

		/**/
		/**/
		/**/
		/**/
		/*Premiere partie: tous les cas avec une Scompaction en surface*/
		/**/
		/**/
		/**/
		/**/


		/**/
		/**/
		/*cas 1*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Très Peu' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 57%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 42%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 2*/
		/**/
		/**/

		if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Très Peu' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 66%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 33%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 3*/
		/**/
		/**/


	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Très Peu' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 66%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 33%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 4*/
		/**/
		/**/


		if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Très Peu' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 57%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 42%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 5*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Très Peu' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 6*/
		/**/
		/**/


		if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Peu' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 7*/
		/**/
		/**/

		if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Peu' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 60%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 40%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 8*/
		/**/
		/**/

	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Peu' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 60%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 40%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 9*/
		/**/
		/**/

	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Peu' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 10*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Peu' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 42%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 57%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 11*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Normal' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 12*/
		/**/
		/**/


	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Normal' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 13*/
		/**/
		/**/


	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Normal' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 14*/
		/**/
		/**/


	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Normal' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 40%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 60%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 15*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Normal' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 66%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 16*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Beaucoup' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 40%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 60%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 17*/
		/**/
		/**/


	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Beaucoup' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 18*/
		/**/
		/**/


	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Beaucoup' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 19*/
		/**/
		/**/


	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Beaucoup' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 40%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 60%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 20*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Beaucoup' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 66%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 21*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Très Beaucoup' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 25%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 75%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 22*/
		/**/
		/**/


	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Très Beaucoup' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 66%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 23*/
		/**/
		/**/


	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Très Beaucoup' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 66%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 24*/
		/**/
		/**/


	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Très Beaucoup' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 21%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 78%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 25*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Très Beaucoup' && compaction == 'En Surface'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Avoine : 20%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 80%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/**/
		/**/
		/*Deuxième partie: tous les cas avec une compaction en profondeur*/
		/**/
		/**/
		/**/
		/**/

		/**/
		/**/
		/*cas 1*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Très Peu' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Moutarde Blanche : 100%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 2*/
		/**/
		/**/


	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Très Peu' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Moutarde Blanche : 100%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}



		/**/
		/**/
		/*cas 3*/
		/**/
		/**/


	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Très Peu' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 66%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 33%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 4*/
		/**/
		/**/


	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Très Peu' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 57%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 42%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 5*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Très Peu' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 50");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 6*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'peu' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Moutarde Blanche : 100%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 7*/
		/**/
		/**/


	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Peu' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Moutarde Blanche : 100%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 8*/
		/**/
		/**/


	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Peu' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 60%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 40%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 9*/
		/**/
		/**/


	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Peu' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 10*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Peu' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 42%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 42%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 11*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Normal' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 66%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 12*/
		/**/
		/**/

	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Normal' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 40%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 60%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 13*/
		/**/
		/**/

	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Normal' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 14*/
		/**/
		/**/

	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Normal' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 40%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 60%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 15*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Normal' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 40%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 60%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 16*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Beaucoup' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 66%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 17*/
		/**/
		/**/


	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Beaucoup' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 40%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 60%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 18*/
		/**/
		/**/


	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Beaucoup' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 19*/
		/**/
		/**/


	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Beaucoup' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 40%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 60%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 20*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Beaucoup' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 66%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 21*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Très Beaucoup' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 20%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 80%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 22*/
		/**/
		/**/

	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Très Beaucoup' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 25%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 75%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 23*/
		/**/
		/**/

	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Très Beaucoup' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 25%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 75%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 24*/
		/**/
		/**/

	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Très Beaucoup' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 25%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 75%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 25*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Très Beaucoup' && compaction == 'En Profondeur'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 20%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 80%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/**/
		/**/
		/*Troisième partie: tous les cas avec une compaction horizon compacté*/
		/**/
		/**/
		/**/
		/**/



		/**/
		/**/
		/*cas 1*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Très Peu' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 33%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 66%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 2*/
		/**/
		/**/

	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Très Peu' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 28%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 28%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 42%");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 3*/
		/**/
		/**/

	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Très Peu' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 4*/
		/**/
		/**/

	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Très Peu' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 40%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 40%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Févérole : 20%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 5*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Très Peu' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 33%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Févérole : 33%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 6*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Peu' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 28%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 14%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 57%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 7*/
		/**/
		/**/

	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Peu' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 16%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 50%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 8*/
		/**/
		/**/

	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Peu' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 25%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Févérole : 25%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 9*/
		/**/
		/**/

	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Peu' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 40%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 250");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Févérole : 40%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 10*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Peu' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 16%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Févérole : 50%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 11*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Normal' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 40%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 60%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 12*/
		/**/
		/**/


	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Normal' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 13*/
		/**/
		/**/


	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Normal' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Févérole : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 14*/
		/**/
		/**/


	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Normal' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 40%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Févérole : 60%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 15*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Normal' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Févérole : 66%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 16*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Beaucoup' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 28%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 71%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 17*/
		/**/
		/**/

	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Beaucoup' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 37%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 62%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 18*/
		/**/
		/**/

	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Beaucoup' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 37%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Févérole : 62%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 19*/
		/**/
		/**/

	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Beaucoup' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 28%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Févérole : 71%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 20*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Beaucoup' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 23%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Févérole : 76%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 21*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 21%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 78%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 22*/
		/**/
		/**/


	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 28%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 71%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 23*/
		/**/
		/**/


	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 28%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Févérole : 71%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 24*/
		/**/
		/**/


	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 21%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Févérole : 78%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 25*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Horizon Compacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 16%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Févérole : 83%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}



		/**/
		/**/
		/**/
		/**/
		/*Quatrieme partie: tous les cas 
		avec une compaction normal*/
		/**/
		/**/
		/**/
		/**/


		/**/
		/**/
		/*cas 1*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Très Peu' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 9%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 45%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 45%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 2*/
		/**/
		/**/

	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Très Peu' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 10%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 38%");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 3*/
		/**/
		/**/

	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Très Peu' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 11%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 58%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 29%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 4*/
		/**/
		/**/

	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Très Peu' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 16%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 83%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 5*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Très Peu' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 16%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 83%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 6*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Peu' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 10%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 38%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 51%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 7*/
		/**/
		/**/

	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Peu' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 11%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 44%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 44%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 8*/
		/**/
		/**/

	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Peu' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 13%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 51%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 34%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 9*/
		/**/
		/**/

	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Peu' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 21%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 78%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 10*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Peu' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 16%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 62%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("lentille: 16%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 11*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Normal' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 13%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 38%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 51%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 12*/
		/**/
		/**/

	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Normal' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 16%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 41%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 41%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 13*/
		/**/
		/**/

	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Normal' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 28%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 71%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 14*/
		/**/
		/**/


	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Normal' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 21%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 52%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("lentille : 26%");
	plante3.appendChild(plante3Text);

	}



		/**/
		/**/
		/*cas 15*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Normal' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 16%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 41%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("lentille : 41%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 16*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Beaucoup' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 16%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 20%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 62%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 17*/
		/**/
		/**/

	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Beaucoup' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 21%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 26%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("Navette : 52%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 18*/
		/**/
		/**/

	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Beaucoup' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 28%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 35%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("lentille : 35%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 19*/
		/**/
		/**/

	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Beaucoup' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 21%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 26%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("lentille : 52%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 20*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Beaucoup' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 16%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Trèfle incarnat : 20%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("lentille : 62%");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 21*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 21%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 78%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 22*/
		/**/
		/**/

	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 28%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 71%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 23*/
		/**/
		/**/

	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 28%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 71%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 24*/
		/**/
		/**/

	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 21%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 78%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 25*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Normal'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Radis : 16%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 83%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/**/
		/**/
		/*Cinquième partie: tous les cas avec une décompaction*/
		/**/
		/**/
		/**/
		/**/

		/**/
		/**/
		/*cas 1*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Très Peu' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 2*/
		/**/
		/**/


	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Très Peu' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 57%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 42%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 3*/
		/**/
		/**/


	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Très Peu' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 66%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 33%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 4*/
		/**/
		/**/


	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Très Peu' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 80%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 20%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 5*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Très Peu' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 100%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 6*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Peu' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 42%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 57%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 7*/
		/**/
		/**/

	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Peu' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 60%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 40%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 8*/
		/**/
		/**/

	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Peu' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 75%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 25%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 9*/
		/**/
		/**/

	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Peu' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 100%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 10*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Peu' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 75%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 25%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 11*/
		/**/
		/**/

	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Normal' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 40%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 60%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 12*/
		/**/
		/**/


	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Normal' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 13*/
		/**/
		/**/


	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Normal' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 100%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 14*/
		/**/
		/**/


	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Normal' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 66%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 33%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 15*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Normal' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 16*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Beaucoup' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 25%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 75%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 17*/
		/**/
		/**/


	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Beaucoup' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("Navette : 66%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 18*/
		/**/
		/**/


	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Beaucoup' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 50%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 50%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 19*/
		/**/
		/**/


	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Beaucoup' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 33%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 66%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 20*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Beaucoup' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Trèfle incarnat : 25%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("lentille : 75%");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 21*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Beaucoup' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Navette : 100%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 22*/
		/**/
		/**/


	if ( quantiteAzote== 'Beaucoup' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("Navette : 100%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 23*/
		/**/
		/**/


	if ( quantiteAzote== 'Normal' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("lentille : 100%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}

		/**/
		/**/
		/*cas 24*/
		/**/
		/**/


	if ( quantiteAzote== 'Peu' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("lentille : 100%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


		/**/
		/**/
		/*cas 25*/
		/**/
		/**/


	if ( quantiteAzote== 'Très Peu' && quantiteCarbone == 'Très Beaucoup' && compaction == 'Décompacté'){
		
		/**/
		/*composition plante1*/
		/**/

		var plante1 = document.createElement('div');
	plante1.id ='plante1';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante1);

	var plante1Text = document.createTextNode("lentille : 100%");
	plante1.appendChild(plante1Text);


		/**/
		/*composition plante2*/
		/**/

	var plante2 = document.createElement('div');
	plante2.id ='plante2';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante2);

	var plante2Text = document.createTextNode("");
	plante2.appendChild(plante2Text);


		/**/
		/*composition plante3*/
		/**/

	var plante3 = document.createElement('div');
	plante3.id ='plante3';
	var resultat=document.getElementById('resultat');

	resultat.appendChild(plante3);

	var plante3Text = document.createTextNode("");
	plante3.appendChild(plante3Text);

	}


}

