var mdp = document.getElementById("password").value;
var test = test;

function goSecondStep(){
	if (mdp == test){
		document.getElementById('thirdStep').style.display = "block";
		document.getElementById('firstStep').style.display = "none";
		
	}
	else{
		alert("mot de passe incorrect");
	}	
}

// rechercheNouveau: fonction qui permet de passer sur la 4e page si on click sur ok lors de la recherche nouveau client
// de plus elle fait apparaitre le nom et prénom du client en haut à gauche
// si l'entrez est vide la fonction renvoie n message d'erreur
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


// rechercheNouveau: fonction qui permet de passer sur la 4e page si on click sur ok lors de la recherche client ancien.
// de plus elle fait apparaitre le nom et prénom du client en haut à gauche
// si l'entrez est vide la fonction renvoie n message d'erreur

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



// permet de revenir sur la 3e page
// supprime tout les éléments effectuer sur la 4e page(pas encore fait)

function retour(){
	document.getElementById('fourthStep').style.display = "none";
	document.getElementById('thirdStep').style.display= "block";
    document.getElementById('nouveauClient').value= null; 
	
	

}




// toujours lors du click sur le bouton ok de la 3e page, la fonction affiche un lien avec le document correspondant au client en question


function elementDossierNouveau(){
	var lienDossier= document.createElement('a');
	lienDossier.id='lienDossier';
	lienDossier.href = 'http://www.siteduzero.com';

	document.getElementById('elementDossier').appendChild(lienDossier);

	var lienDossierText = document.createTextNode("son Dossier");
	lienDossier.appendChild(lienDossierText);


}


function elementDossierAncien(){

	var lienDossier= document.createElement('a');
	lienDossier.id='lienDossier';
	lienDossier.href = 'http://www.siteduzero.com';

	document.getElementById('elementDossier').appendChild(lienDossier);

	var lienDossierText = document.createTextNode("son Dossier");
	lienDossier.appendChild(lienDossierText);

}





// permet d télécharger la carte du client et de l'afficher sur la page
// de plus elle insere un lien qui permet d'obtenir la carte en grand si on click dessus et de revenir normal en appuyant ailleurs



function lesCartesNouveau(){

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
	

//function envoyermail pour afficher la page 5

function envoyerMail(){
	document.getElementById('fifthStep').style.display = "block";
	document.getElementById('sendMail').style.display="none";
}
        
