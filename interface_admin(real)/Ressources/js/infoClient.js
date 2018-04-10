

creerParcelleLien();

/**/
/**/
/*fonction qui permet de créer chaque parcelle que le client possède
il suffit de cliquer dessus por passer sur la page de sa parcelle*/
/**/
/**/

function creerParcelleLien(){

	var nombreParcelle = 5;
	var parcelle= []

	for(var i=1; i<=nombreParcelle; i++){

		parcelle[i]= document.createElement('button');
	    parcelle[i].id= i; 
	    parcelle[i].style='display: inline-block;background : none;font-size: 2vh;border-radius: 1vh;height: 4vh;min-width: 5vh;text-align: center;'
	    parcelle[i].onclick= deuxiemePage;



		

	document.getElementById('parcellesClient').appendChild(parcelle[i]);

	var parcelleText = document.createTextNode("Parcelle "+i+" ");
	parcelle[i].appendChild(parcelleText);
	
	var passerUneLigne= document.createElement('p');
	document.getElementById('parcellesClient').appendChild(passerUneLigne);
	
			}


}

/**/
/**/
/*fonction qui permet d'arriver sur la page
 de la parcelle sélectionné en cliquand dessus*/
/**/
/**/

function deuxiemePage(){
	


document.getElementById('renseignementClientPage2').style.display='block';
document.getElementById('informationsPersonnellesClient').style.display= 'none';
document.getElementById('informationsAgricolesClient').style.display= 'none';
document.getElementById('retour').style.display= 'none';


/*permet de récuperer le numéro de la parcelle*/

var numero = $(this).attr('id');

alert('le numéro est : '+ numero);


var numeroParcelle = document.createElement('h2');
numeroParcelle.id= 'numeroParcelle';
document.getElementById('mettreNumeroParcelle').appendChild(numeroParcelle);
var numeroParcelleText = document.createTextNode('Parcelle '+numero);
numeroParcelle.appendChild(numeroParcelleText);

baseDeDonneesParcelleClient();
	
}



/**/
/**/
/*fonction qui permet de revenir sur la page client
 lorsqu'on est sur une page parcelle*/
/**/
/**/
/**/
		
 function retour3(){
 	document.getElementById('pageCarte').style.display='none';
 	document.getElementById('renseignementClientPage2').style.display='none';
	document.getElementById('informationsPersonnellesClient').style.display= 'block';
	document.getElementById('informationsAgricolesClient').style.display= 'block';
	document.getElementById('retour').style.display='block';
/*supprime les éléments incrit dans la page.*/

	var numeroParcelleEnfant= document.getElementById('numeroParcelle');
		var numeroParcelleParent= document.getElementById('mettreNumeroParcelle');
		numeroParcelleParent.removeChild(numeroParcelleEnfant);
		
	supprimerBaseDeDonneesParcelleClient();
	
 }

/**/
/**/
/**/
/**/
/**/
/*fonction qui récupère les données sur le client de 
la bdd et l'insère dans le html en créant des nouveaux éléments
*/
/**/
/**/
/**/
/**/

function baseDeDonneesClient(){

		/*on crée le nom*/

	var nomDuClient = document.createElement('div');
	nomDuClient.id ='nomDuClient';
	var nomClientParent=document.getElementById('nomClient');

	nomClientParent.appendChild(nomDuClient);

	var nomClientText = document.createTextNode("ici on appelle le nom du client");
	nomDuClient.appendChild(nomClientText);

			/*on crée le prénom*/

			var prenomDuClient = document.createElement('div');
	prenomDuClient.id ='prenomDuClient';
	var prenomClientParent=document.getElementById('prenomClient');

	prenomClientParent.appendChild(prenomDuClient);

	var prenomClientText = document.createTextNode("ici on appelle le prenom du client");
	prenomDuClient.appendChild(prenomClientText);

			/*on crée le téléphone*/

	var telephoneDuClient = document.createElement('div');
	telephoneDuClient.id ='telephoneDuClient';
	var telephoneClientParent=document.getElementById('telephoneClient');

	telephoneClientParent.appendChild(telephoneDuClient);

	var telephoneClientText = document.createTextNode("ici on appelle le téléphone du client");
	telephoneDuClient.appendChild(telephoneClientText);


			/*on crée l'adresse mail*/

			var adresseMailDuClient = document.createElement('div');
	adresseMailDuClient.id ='adresseMailDuClient';
	var adresseMailClientParent=document.getElementById('adresseMailClient');

	adresseMailClientParent.appendChild(adresseMailDuClient);

	var adresseMailClientText = document.createTextNode("ici on appelle l'adresse mail du client");
	adresseMailDuClient.appendChild(adresseMailClientText);


			/*on crée la rue*/

			var rueDuClient = document.createElement('div');
	rueDuClient.id ='rueDuClient';
	var rueClientParent=document.getElementById('rueClient');

	rueClientParent.appendChild(rueDuClient);

	var rueClientText = document.createTextNode("ici on appelle la rue du client");
	rueDuClient.appendChild(rueClientText);


			/*on crée le code Postal*/

	var codePostalDuClient = document.createElement('div');
	codePostalDuClient.id ='codePostalDuClient';
	var codePostalClientParent=document.getElementById('codePostalClient');

	codePostalClientParent.appendChild(codePostalDuClient);

	var codePostalClientText = document.createTextNode("ici on appelle le code postal du client");
	codePostalDuClient.appendChild(codePostalClientText);


			/*on crée la ville*/

				var villeDuClient = document.createElement('div');
	villeDuClient.id ='villeDuClient';
	var villeClientParent=document.getElementById('villeClient');

	villeClientParent.appendChild(villeDuClient);

	var villeClientText = document.createTextNode("ici on appelle la ville postal du client");
	villeDuClient.appendChild(villeClientText);

			/*on crée le nombre d'hectare*/

			var nombreHectareDuClient = document.createElement('div');
	nombreHectareDuClient.id ='nombreHectareDuClient';
	var nombreHectareClientParent=document.getElementById('nombreHectareClient');

	nombreHectareClientParent.appendChild(nombreHectareDuClient);

	var nombreHectareClientText = document.createTextNode("ici on appelle le nombre d'hectare du client");
	nombreHectareDuClient.appendChild(nombreHectareClientText);

			/*on crée le nombre de parcelle*/

				var nombreParcelleDuClient = document.createElement('div');
	nombreParcelleDuClient.id ='nombreParcelleDuClient';
	var nombreParcelleClientParent=document.getElementById('nombreParcelleClient');

	nombreParcelleClientParent.appendChild(nombreParcelleDuClient);

	var nombreParcelleClientText = document.createTextNode("ici on appelle le nombre de parcelles du client");
	nombreParcelleDuClient.appendChild(nombreParcelleClientText);


			/*on crée la situation parcelle*/

			var situationParcelleDuClient = document.createElement('div');
	situationParcelleDuClient.id ='situationParcelleDuClient';
	var situationParcelleClientParent=document.getElementById('situationParcelleClient');

	situationParcelleClientParent.appendChild(situationParcelleDuClient);

	var situationParcelleClientText = document.createTextNode("ici on appelle la situation des parcelles du client");
	situationParcelleDuClient.appendChild(situationParcelleClientText);



			/*on crée la déclaration pac client*/

			var declarationPACDuClient = document.createElement('div');
	declarationPACDuClient.id ='declarationPACDuClient';
	var declarationPACClientParent=document.getElementById('declarationPACClient');

	declarationPACClientParent.appendChild(declarationPACDuClient);

	var declarationPACClientText = document.createTextNode("ici on appelle la déclaration PAC du client");
	declarationPACDuClient.appendChild(declarationPACClientText);



		
}


/**/
/**/
/**/
/*fonction qui crée les éléments de la base de données
 à insérer concernant les parcelles
 cad dans la page parcelle*/
/**/
/**/
/**/


function baseDeDonneesParcelleClient(){



			/*on crée la culture précédente*/


			var culturePrecedenteDuClient = document.createElement('div');
	culturePrecedenteDuClient.id ='culturePrecedenteDuClient';
	var culturePrecedenteClientParent=document.getElementById('culturePrecedenteClient');

	culturePrecedenteClientParent.appendChild(culturePrecedenteDuClient);

	var culturePrecedenteClientText = document.createTextNode("ici on appelle la culture précédente du client");
	culturePrecedenteDuClient.appendChild(culturePrecedenteClientText);


			/*on crée la culture suivante*/


			var cultureSuivanteDuClient = document.createElement('div');
	cultureSuivanteDuClient.id ='cultureSuivanteDuClient';
	var cultureSuivanteClientParent=document.getElementById('cultureSuivanteClient');

	cultureSuivanteClientParent.appendChild(cultureSuivanteDuClient);

	var cultureSuivanteClientText = document.createTextNode("ici on appelle la culture suivante du client");
	cultureSuivanteDuClient.appendChild(cultureSuivanteClientText);


			/*on crée la date de récolte*/

			var dateRecolteDuClient = document.createElement('div');
	dateRecolteDuClient.id ='dateRecolteDuClient';
	var dateRecolteClientParent=document.getElementById('dateRecolteClient');

	dateRecolteClientParent.appendChild(dateRecolteDuClient);

	var dateRecolteClientText = document.createTextNode("ici on appelle la date de récolte du client");
	dateRecolteDuClient.appendChild(dateRecolteClientText);


			/*on crée le plan de fumure */

				var planFumureDuClient = document.createElement('div');
	planFumureDuClient.id ='planFumureDuClient';
	var planFumureClientParent=document.getElementById('planFumureClient');

	planFumureClientParent.appendChild(planFumureDuClient);

	var planFumureClientText = document.createTextNode("ici on appelle le plan de fumure du client");
	planFumureDuClient.appendChild(planFumureClientText);


			/*on crée la cartographie de fertilisation*/


				var cartographieFertilisationDuClient = document.createElement('div');
	cartographieFertilisationDuClient.id ='cartographieFertilisationDuClient';
	var cartographieFertilisationClientParent=document.getElementById('cartographieFertilisationClient');

	cartographieFertilisationClientParent.appendChild(cartographieFertilisationDuClient);

	var cartographieFertilisationClientText = document.createTextNode("ici on appelle la cartographie de fertilisation du client");
	cartographieFertilisationDuClient.appendChild(cartographieFertilisationClientText);



			/*on crée es reliquats sortie d'hiver*/


				var reliquatsHiverDuClient = document.createElement('div');
	reliquatsHiverDuClient.id ='reliquatsHiverDuClient';
	var reliquatsHiverClientParent=document.getElementById('reliquatsHiverClient');

	reliquatsHiverClientParent.appendChild(reliquatsHiverDuClient);

	var reliquatsHiverClientText = document.createTextNode("ici on appelle les reliquatssorties d'hiver du client");
	reliquatsHiverDuClient.appendChild(reliquatsHiverClientText);

				/*on crée l'analyse sol*/


				var analyseSolDuClient = document.createElement('div');
	analyseSolDuClient.id ='analyseSolDuClient';
	var analyseSolClientParent=document.getElementById('analyseSolClient');

	analyseSolClientParent.appendChild(analyseSolDuClient);

	var analyseSolClientText = document.createTextNode("ici on appelle l'analyse du sol du client");
	analyseSolDuClient.appendChild(analyseSolClientText);


			/*on crée le type de semoir*/


				var typeSemoirDuClient = document.createElement('div');
	typeSemoirDuClient.id ='typeSemoirDuClient';
	var typeSemoirClientParent=document.getElementById('typeSemoirClient');

	typeSemoirClientParent.appendChild(typeSemoirDuClient);

	var typeSemoirClientText = document.createTextNode("ici on appelle le type de semoir du client");
	typeSemoirDuClient.appendChild(typeSemoirClientText);

			/*on crée le mode de destruction*/


				var modeDestructionDuClient = document.createElement('div');
	modeDestructionDuClient.id ='modeDestructionDuClient';
	var modeDestructionClientParent=document.getElementById('modeDestructionClient');

	modeDestructionClientParent.appendChild(modeDestructionDuClient);

	var modeDestructionClientText = document.createTextNode("ici on appelle le mode de destruction du client");
	modeDestructionDuClient.appendChild(modeDestructionClientText);


			/*on crée les problèmes de la parcelle*/


				var problemeParcelleDuClient = document.createElement('div');
	problemeParcelleDuClient.id ='problemeParcelleDuClient';
	var problemeParcelleClientParent=document.getElementById('problemeParcelleClient');

	problemeParcelleClientParent.appendChild(problemeParcelleDuClient);

	var problemeParcelleClientText = document.createTextNode("ici on appelle le probleme de la parcelle du client");
	problemeParcelleDuClient.appendChild(problemeParcelleClientText);



			/*on crée le rendement*/


				var leRendementDuClient = document.createElement('div');
	leRendementDuClient.id ='leRendementDuClient';
	var leRendementClientParent=document.getElementById('leRendementClient');

	leRendementClientParent.appendChild(leRendementDuClient);

	var leRendementClientText = document.createTextNode("ici on appelle le rendement du client");
	leRendementDuClient.appendChild(leRendementClientText);



			/*on crée la cartographie de rendement*/



				var cartographieRendementDuClient = document.createElement('div');
	cartographieRendementDuClient.id ='cartographieRendementDuClient';
	var cartographieRendementClientParent=document.getElementById('cartographieRendementClient');

	cartographieRendementClientParent.appendChild(cartographieRendementDuClient);

	var cartographieRendementClientText = document.createTextNode("ici on appelle la cartographie de rendement du client");
	cartographieRendementDuClient.appendChild(cartographieRendementClientText);

			/*on vrée la remarque parcelle*/

		var remarqueDuClient = document.createElement('div');
	remarqueDuClient.id ='remarqueDuClient';
	var remarqueClientParent=document.getElementById('remarqueClient');

	remarqueClientParent.appendChild(remarqueDuClient);

	var remarqueClientText = document.createTextNode("ici on appelle la remarque sur la parcelle du client");
	remarqueDuClient.appendChild(remarqueClientText);






	}

			

/**/
/**/
/**/
/*fonction qui supprime les éléments de la base de données
concernant le client sélectionner losque l'administrateur
appuie sur retour*/
/**/
/**/
/**/


function supprimerBaseDeDonneesClient(){


		/*on supprime le nom*/

		var nomClientParent=document.getElementById('nomClient');
		var nomClientEnfant=document.getElementById('nomDuClient');

		nomClientParent.removeChild(nomClientEnfant);

			/*on supprime le prénom*/

		var prenomClientParent=document.getElementById('prenomClient');
		var prenomClientEnfant=document.getElementById('prenomDuClient');

		prenomClientParent.removeChild(prenomClientEnfant);

			/*on supprime le téléphone*/

		var telephoneClientParent=document.getElementById('telephoneClient');
		var telephoneClientEnfant=document.getElementById('telephoneDuClient');

		telephoneClientParent.removeChild(telephoneClientEnfant);


			/*on supprime l'adresse mail*/

		var adresseMailClientParent=document.getElementById('adresseMailClient');
		var adresseMailClientEnfant=document.getElementById('adresseMailDuClient');

		adresseMailClientParent.removeChild(adresseMailClientEnfant);



			/*on supprime la rue*/

		var rueClientParent=document.getElementById('rueClient');
		var rueClientEnfant=document.getElementById('rueDuClient');

		rueClientParent.removeChild(rueClientEnfant);


			/*on supprime le code postal*/


		var codePostalClientParent=document.getElementById('codePostalClient');
		var codePostalClientEnfant=document.getElementById('codePostalDuClient');

		codePostalClientParent.removeChild(codePostalClientEnfant);



			/*on supprime la ville*/

		var villeClientParent=document.getElementById('villeClient');
		var villeClientEnfant=document.getElementById('villeDuClient');

		villeClientParent.removeChild(villeClientEnfant);




			/*on supprime le nombre d'hectare*/


		var nombreHectareClientParent=document.getElementById('nombreHectareClient');
		var nombreHectareClientEnfant=document.getElementById('nombreHectareDuClient');

		nombreHectareClientParent.removeChild(nombreHectareClientEnfant);


			/*on supprime le nombre de parcelle*/


		var	nombreParcelleClientParent=document.getElementById('nombreParcelleClient');
		var nombreParcelleClientEnfant=document.getElementById('nombreParcelleDuClient');

		nombreParcelleClientParent.removeChild(nombreParcelleClientEnfant);


			/*on supprime la situation parcelle*/


		var	situationParcelleClientParent=document.getElementById('situationParcelleClient');
		var situationParcelleClientEnfant=document.getElementById('situationParcelleDuClient');

		situationParcelleClientParent.removeChild(situationParcelleClientEnfant);


			/*on supprime la déclaration pac client*/

		var	declarationPACClientParent=document.getElementById('declarationPACClient');
		var declarationPACClientEnfant=document.getElementById('declarationPACDuClient');

		declarationPACClientParent.removeChild(declarationPACClientEnfant);


		


	}
	
/**/
/**/
/**/
/*fonction qui supprime les éléments de la base de données
concernant la parcelle du client sélectionner losque l'administrateur
appuie sur retour ver le client*/
/**/
/**/
/**/

	function supprimerBaseDeDonneesParcelleClient(){


			/*on supprime la culture précédente*/


		var culturePrecedenteClientParent=document.getElementById('culturePrecedenteClient');
		var culturePrecedenteClientEnfant=document.getElementById('culturePrecedenteDuClient');

		culturePrecedenteClientParent.removeChild(culturePrecedenteClientEnfant);

			/*on supprime la culture suivante*/


		var cultureSuivanteClientParent=document.getElementById('cultureSuivanteClient');
		var cultureSuivanteClientEnfant=document.getElementById('cultureSuivanteDuClient');

		cultureSuivanteClientParent.removeChild(cultureSuivanteClientEnfant);


			/*on supprime la date de récolte*/

		var dateRecolteClientParent=document.getElementById('dateRecolteClient');
		var dateRecolteClientEnfant=document.getElementById('dateRecolteDuClient');

		dateRecolteClientParent.removeChild(dateRecolteClientEnfant);


			/*on supprime le plan de fumure */


		var planFumureClientParent=document.getElementById('planFumureClient');
		var planFumureClientEnfant=document.getElementById('planFumureDuClient');

		planFumureClientParent.removeChild(planFumureClientEnfant);


			/*on supprime la cartographie de fertilisation*/


		var cartographieFertilisationClientParent=document.getElementById('cartographieFertilisationClient');
		var cartographieFertilisationClientEnfant=document.getElementById('cartographieFertilisationDuClient');

		cartographieFertilisationClientParent.removeChild(cartographieFertilisationClientEnfant);


			/*on supprime l'analyse du sol du client*/


		var analyseSolClientParent=document.getElementById('analyseSolClient');
		var analyseSolClientEnfant=document.getElementById('analyseSolDuClient');

		analyseSolClientParent.removeChild(analyseSolClientEnfant);



			/*on supprime les reliquats sortie d'hiver*/

		var reliquatsHiverClientParent=document.getElementById('reliquatsHiverClient');
		var reliquatsHiverClientEnfant=document.getElementById('reliquatsHiverDuClient');

		reliquatsHiverClientParent.removeChild(reliquatsHiverClientEnfant);

			/*on supprime le type de semoir*/


		var typeSemoirClientParent=document.getElementById('typeSemoirClient');
		var typeSemoirClientEnfant=document.getElementById('typeSemoirDuClient');

		typeSemoirClientParent.removeChild(typeSemoirClientEnfant);

			/*on supprime le mode de destruction*/


		var modeDestructionClientParent=document.getElementById('modeDestructionClient');
		var modeDestructionClientEnfant=document.getElementById('modeDestructionDuClient');

		modeDestructionClientParent.removeChild(modeDestructionClientEnfant);


			/*on supprime les problèmes de la parcelle*/


		var problemeParcelleClientParent=document.getElementById('problemeParcelleClient');
		var problemeParcelleClientEnfant=document.getElementById('problemeParcelleDuClient');

		problemeParcelleClientParent.removeChild(problemeParcelleClientEnfant);

			/*on supprime le rendement*/


		var leRendementClientParent=document.getElementById('leRendementClient');
		var leRendementClientEnfant=document.getElementById('leRendementDuClient');

		leRendementClientParent.removeChild(leRendementClientEnfant);



			/*on supprime la cartographie de rendement*/
			


		var cartographieRendementClientParent=document.getElementById('cartographieRendementClient');
		var cartographieRendementClientEnfant=document.getElementById('cartographieRendementDuClient');

		cartographieRendementClientParent.removeChild(cartographieRendementClientEnfant);

			/* on supprime la remarque*/


		var remarqueClientParent=document.getElementById('remarqueClient');
		var remarqueClientEnfant=document.getElementById('remarqueDuClient');

		remarqueClientParent.removeChild(remarqueClientEnfant);



	}



	function voirCarteClient(){

		document.getElementById('pageCarte').style.display='block';
		document.getElementById('informationsPersonnellesClient').style.display= 'none';
		document.getElementById('informationsAgricolesClient').style.display= 'none';
		document.getElementById('retour').style.display= 'none';
	}