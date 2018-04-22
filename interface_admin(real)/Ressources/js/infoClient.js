var nombreParcelle;

/**/
/**/
/*fonction qui permet de créer chaque parcelle que le client possède
il suffit de cliquer dessus por passer sur la page de sa parcelle*/
/**/
/**/

function creerParcelleLien(){
	
	if (nouveauClient=='ihaddadene')
	{
		alert('c\'est Nacim');
		client='Nacim';

		nombreParcelle = 1;
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
	baseDeDonneesNacim();
	
	


}


	if(nouveauClient=='vandoorne'){
		alert('c\'est Bertrand');

		client= 'Bertrand';

	var nombreParcelle = 2;
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
			baseDeDonneesBertrand();
			


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

if(nouveauClient=='vandoorne'){

	baseDeDonneesParcellesBertrand(numero);
}
if(nouveauClient=='ihaddadene'){

	baseDeDonneesParcelleNacim();
}

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

function baseDeDonneesNacim(){

		/*on crée le nom*/

	var nomDuClient = document.createElement('div');
	nomDuClient.id ='nomDuClient';
	var nomClientParent=document.getElementById('LenomClient');

	nomClientParent.appendChild(nomDuClient);

	var nomClientText = document.createTextNode("Ihaddadene");
	nomDuClient.appendChild(nomClientText);

			/*on crée le prénom*/

			var prenomDuClient = document.createElement('div');
	prenomDuClient.id ='prenomDuClient';
	var prenomClientParent=document.getElementById('prenomClient');

	prenomClientParent.appendChild(prenomDuClient);

	var prenomClientText = document.createTextNode("Nacim");
	prenomDuClient.appendChild(prenomClientText);

			/*on crée le téléphone*/

	var telephoneDuClient = document.createElement('div');
	telephoneDuClient.id ='telephoneDuClient';
	var telephoneClientParent=document.getElementById('telephoneClient');

	telephoneClientParent.appendChild(telephoneDuClient);

	var telephoneClientText = document.createTextNode("0662783457");
	telephoneDuClient.appendChild(telephoneClientText);


			/*on crée l'adresse mail*/

			var adresseMailDuClient = document.createElement('div');
	adresseMailDuClient.id ='adresseMailDuClient';
	var adresseMailClientParent=document.getElementById('adresseMailClient');

	adresseMailClientParent.appendChild(adresseMailDuClient);

	var adresseMailClientText = document.createTextNode("nacim.ihaddadene@yncrea.fr");
	adresseMailDuClient.appendChild(adresseMailClientText);


			/*on crée la rue*/

			var rueDuClient = document.createElement('div');
	rueDuClient.id ='rueDuClient';
	var rueClientParent=document.getElementById('rueClient');

	rueClientParent.appendChild(rueDuClient);

	var rueClientText = document.createTextNode("Rue National");
	rueDuClient.appendChild(rueClientText);


			/*on crée le code Postal*/

	var codePostalDuClient = document.createElement('div');
	codePostalDuClient.id ='codePostalDuClient';
	var codePostalClientParent=document.getElementById('codePostalClient');

	codePostalClientParent.appendChild(codePostalDuClient);

	var codePostalClientText = document.createTextNode("59800");
	codePostalDuClient.appendChild(codePostalClientText);


			/*on crée la ville*/

				var villeDuClient = document.createElement('div');
	villeDuClient.id ='villeDuClient';
	var villeClientParent=document.getElementById('villeClient');

	villeClientParent.appendChild(villeDuClient);

	var villeClientText = document.createTextNode("Lille");
	villeDuClient.appendChild(villeClientText);

			/*on crée le nombre d'hectare*/

			var nombreHectareDuClient = document.createElement('div');
	nombreHectareDuClient.id ='nombreHectareDuClient';
	var nombreHectareClientParent=document.getElementById('nombreHectareClient');

	nombreHectareClientParent.appendChild(nombreHectareDuClient);

	var nombreHectareClientText = document.createTextNode("3");
	nombreHectareDuClient.appendChild(nombreHectareClientText);

			/*on crée le nombre de parcelle*/

				var nombreParcelleDuClient = document.createElement('div');
	nombreParcelleDuClient.id ='nombreParcelleDuClient';
	var nombreParcelleClientParent=document.getElementById('nombreParcelleClient');

	nombreParcelleClientParent.appendChild(nombreParcelleDuClient);

	var nombreParcelleClientText = document.createTextNode("1");
	nombreParcelleDuClient.appendChild(nombreParcelleClientText);


			/*on crée la situation parcelle*/

			var situationParcelleDuClient = document.createElement('div');
	situationParcelleDuClient.id ='situationParcelleDuClient';
	var situationParcelleClientParent=document.getElementById('situationParcelleClient');

	situationParcelleClientParent.appendChild(situationParcelleDuClient);

	var situationParcelleClientText = document.createTextNode("Nature 2000");
	situationParcelleDuClient.appendChild(situationParcelleClientText);



			/*on crée la déclaration pac client*/

			var declarationPACDuClient = document.createElement('a');
	declarationPACDuClient.id ='declarationPACDuClient';
	declarationPACDuClient.href ='/farmingData/Ihaddadene/declarationPAC_Ihaddadene.pdf';
	var declarationPACClientParent=document.getElementById('declarationPACClient');

	declarationPACClientParent.appendChild(declarationPACDuClient);

	var declarationPACClientText = document.createTextNode("déclaration PAC");
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


function baseDeDonneesParcelleNacim(){



			/*on crée la culture précédente*/


			var culturePrecedenteDuClient = document.createElement('div');
	culturePrecedenteDuClient.id ='culturePrecedenteDuClient';
	var culturePrecedenteClientParent=document.getElementById('culturePrecedenteClient');

	culturePrecedenteClientParent.appendChild(culturePrecedenteDuClient);

	var culturePrecedenteClientText = document.createTextNode("Soja");
	culturePrecedenteDuClient.appendChild(culturePrecedenteClientText);


			/*on crée la culture suivante*/


			var cultureSuivanteDuClient = document.createElement('div');
	cultureSuivanteDuClient.id ='cultureSuivanteDuClient';
	var cultureSuivanteClientParent=document.getElementById('cultureSuivanteClient');

	cultureSuivanteClientParent.appendChild(cultureSuivanteDuClient);

	var cultureSuivanteClientText = document.createTextNode("Maïs");
	cultureSuivanteDuClient.appendChild(cultureSuivanteClientText);


			/*on crée la date de récolte*/

			var dateRecolteDuClient = document.createElement('div');
	dateRecolteDuClient.id ='dateRecolteDuClient';
	var dateRecolteClientParent=document.getElementById('dateRecolteClient');

	dateRecolteClientParent.appendChild(dateRecolteDuClient);

	var dateRecolteClientText = document.createTextNode("10/03/2018");
	dateRecolteDuClient.appendChild(dateRecolteClientText);


			/*on crée le plan de fumure */

				var planFumureDuClient = document.createElement('a');
	planFumureDuClient.id ='planFumureDuClient';
	planFumureDuClient.href = '/farmingData/ihaddadene/planFumure_Ihaddadene.pdf';
	var planFumureClientParent=document.getElementById('planFumureClient');

	planFumureClientParent.appendChild(planFumureDuClient);

	var planFumureClientText = document.createTextNode("plan de fumure");
	planFumureDuClient.appendChild(planFumureClientText);


			/*on crée la cartographie de fertilisation*/


				var cartographieFertilisationDuClient = document.createElement('a');
	cartographieFertilisationDuClient.id ='cartographieFertilisationDuClient';
	cartographieFertilisationDuClient.href = '/farmingData/Ihaddadene/cartographieFertilisation_Ihaddadene.pdf';
	var cartographieFertilisationClientParent=document.getElementById('cartographieFertilisationClient');

	cartographieFertilisationClientParent.appendChild(cartographieFertilisationDuClient);

	var cartographieFertilisationClientText = document.createTextNode("cartographie de fertilisation");
	cartographieFertilisationDuClient.appendChild(cartographieFertilisationClientText);



			/*on crée es reliquats sortie d'hiver*/


				var reliquatsHiverDuClient = document.createElement('a');
	reliquatsHiverDuClient.id ='reliquatsHiverDuClient';
	reliquatsHiverDuClient.href= '/farmingData/Ihaddadene/reliquatHiver_Ihaddadene.pdf';
	var reliquatsHiverClientParent=document.getElementById('reliquatsHiverClient');

	reliquatsHiverClientParent.appendChild(reliquatsHiverDuClient);

	var reliquatsHiverClientText = document.createTextNode("reliquats sorties d'hiver");
	reliquatsHiverDuClient.appendChild(reliquatsHiverClientText);

				/*on crée l'analyse sol*/


				var analyseSolDuClient = document.createElement('a');
	analyseSolDuClient.id ='analyseSolDuClient';
	analyseSolDuClient.href= '/farmingData/Ihaddadene/analyseSol_Ihaddadene.pdf';
	var analyseSolClientParent=document.getElementById('analyseSolClient');

	analyseSolClientParent.appendChild(analyseSolDuClient);

	var analyseSolClientText = document.createTextNode("analyse du sol");
	analyseSolDuClient.appendChild(analyseSolClientText);


			/*on crée le type de semoir*/


				var typeSemoirDuClient = document.createElement('div');
	typeSemoirDuClient.id ='typeSemoirDuClient';
	var typeSemoirClientParent=document.getElementById('typeSemoirClient');

	typeSemoirClientParent.appendChild(typeSemoirDuClient);

	var typeSemoirClientText = document.createTextNode("semoir à la volée");
	typeSemoirDuClient.appendChild(typeSemoirClientText);

			/*on crée le mode de destruction*/


				var modeDestructionDuClient = document.createElement('div');
	modeDestructionDuClient.id ='modeDestructionDuClient';
	var modeDestructionClientParent=document.getElementById('modeDestructionClient');

	modeDestructionClientParent.appendChild(modeDestructionDuClient);

	var modeDestructionClientText = document.createTextNode("broyage");
	modeDestructionDuClient.appendChild(modeDestructionClientText);


			/*on crée les problèmes de la parcelle*/


				var problemeParcelleDuClient = document.createElement('div');
	problemeParcelleDuClient.id ='problemeParcelleDuClient';
	var problemeParcelleClientParent=document.getElementById('problemeParcelleClient');

	problemeParcelleClientParent.appendChild(problemeParcelleDuClient);

	var problemeParcelleClientText = document.createTextNode("Beaucoup de compaction, Maladis étranges, Beaucoup de ravageurs");
	problemeParcelleDuClient.appendChild(problemeParcelleClientText);



			/*on crée le rendement*/


				var leRendementDuClient = document.createElement('div');
	leRendementDuClient.id ='leRendementDuClient';
	var leRendementClientParent=document.getElementById('leRendementClient');

	leRendementClientParent.appendChild(leRendementDuClient);

	var leRendementClientText = document.createTextNode("5");
	leRendementDuClient.appendChild(leRendementClientText);



			/*on crée la cartographie de rendement*/



				var cartographieRendementDuClient = document.createElement('a');
	cartographieRendementDuClient.id ='cartographieRendementDuClient';
	cartographieRendementDuClient.href = '/farmingData/Ihaddadene/cartographieRendement_Ihaddadene.pdf';
	var cartographieRendementClientParent=document.getElementById('cartographieRendementClient');

	cartographieRendementClientParent.appendChild(cartographieRendementDuClient);

	var cartographieRendementClientText = document.createTextNode("Cartographie de rendement");
	cartographieRendementDuClient.appendChild(cartographieRendementClientText);

			/*on vrée la remarque parcelle*/

		var remarqueDuClient = document.createElement('div');
	remarqueDuClient.id ='remarqueDuClient';
	var remarqueClientParent=document.getElementById('remarqueClient');

	remarqueClientParent.appendChild(remarqueDuClient);

	var remarqueClientText = document.createTextNode("ça ne pousse pas");
	remarqueDuClient.appendChild(remarqueClientText);



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

function baseDeDonneesBertrand(){

		/*on crée le nom*/

	var nomDuClient = document.createElement('div');
	nomDuClient.id ='nomDuClient';
	var nomClientParent=document.getElementById('LenomClient');

	nomClientParent.appendChild(nomDuClient);

	var nomClientText = document.createTextNode("Vandoorne");
	nomDuClient.appendChild(nomClientText);

			/*on crée le prénom*/

			var prenomDuClient = document.createElement('div');
	prenomDuClient.id ='prenomDuClient';
	var prenomClientParent=document.getElementById('prenomClient');

	prenomClientParent.appendChild(prenomDuClient);

	var prenomClientText = document.createTextNode("Bertrand");
	prenomDuClient.appendChild(prenomClientText);

			/*on crée le téléphone*/

	var telephoneDuClient = document.createElement('div');
	telephoneDuClient.id ='telephoneDuClient';
	var telephoneClientParent=document.getElementById('telephoneClient');

	telephoneClientParent.appendChild(telephoneDuClient);

	var telephoneClientText = document.createTextNode("0647895601");
	telephoneDuClient.appendChild(telephoneClientText);


			/*on crée l'adresse mail*/

			var adresseMailDuClient = document.createElement('div');
	adresseMailDuClient.id ='adresseMailDuClient';
	var adresseMailClientParent=document.getElementById('adresseMailClient');

	adresseMailClientParent.appendChild(adresseMailDuClient);

	var adresseMailClientText = document.createTextNode("bertrand.vandoorne@yncrea.fr");
	adresseMailDuClient.appendChild(adresseMailClientText);


			/*on crée la rue*/

			var rueDuClient = document.createElement('div');
	rueDuClient.id ='rueDuClient';
	var rueClientParent=document.getElementById('rueClient');

	rueClientParent.appendChild(rueDuClient);

	var rueClientText = document.createTextNode("rue Norbert Segard");
	rueDuClient.appendChild(rueClientText);


			/*on crée le code Postal*/

	var codePostalDuClient = document.createElement('div');
	codePostalDuClient.id ='codePostalDuClient';
	var codePostalClientParent=document.getElementById('codePostalClient');

	codePostalClientParent.appendChild(codePostalDuClient);

	var codePostalClientText = document.createTextNode("59800");
	codePostalDuClient.appendChild(codePostalClientText);


			/*on crée la ville*/

				var villeDuClient = document.createElement('div');
	villeDuClient.id ='villeDuClient';
	var villeClientParent=document.getElementById('villeClient');

	villeClientParent.appendChild(villeDuClient);

	var villeClientText = document.createTextNode("Lille");
	villeDuClient.appendChild(villeClientText);

			/*on crée le nombre d'hectare*/

			var nombreHectareDuClient = document.createElement('div');
	nombreHectareDuClient.id ='nombreHectareDuClient';
	var nombreHectareClientParent=document.getElementById('nombreHectareClient');

	nombreHectareClientParent.appendChild(nombreHectareDuClient);

	var nombreHectareClientText = document.createTextNode("5");
	nombreHectareDuClient.appendChild(nombreHectareClientText);

			/*on crée le nombre de parcelle*/

				var nombreParcelleDuClient = document.createElement('div');
	nombreParcelleDuClient.id ='nombreParcelleDuClient';
	var nombreParcelleClientParent=document.getElementById('nombreParcelleClient');

	nombreParcelleClientParent.appendChild(nombreParcelleDuClient);

	var nombreParcelleClientText = document.createTextNode("2");
	nombreParcelleDuClient.appendChild(nombreParcelleClientText);


			/*on crée la situation parcelle*/

			var situationParcelleDuClient = document.createElement('div');
	situationParcelleDuClient.id ='situationParcelleDuClient';
	var situationParcelleClientParent=document.getElementById('situationParcelleClient');

	situationParcelleClientParent.appendChild(situationParcelleDuClient);

	var situationParcelleClientText = document.createTextNode("zone vulnérable");
	situationParcelleDuClient.appendChild(situationParcelleClientText);



			/*on crée la déclaration pac client*/

			var declarationPACDuClient = document.createElement('a');
	declarationPACDuClient.id ='declarationPACDuClient';
	declarationPACDuClient.href= '/farmingData/Vandoorne/declarationPAC_Vandoorne.pdf';
	var declarationPACClientParent=document.getElementById('declarationPACClient');

	declarationPACClientParent.appendChild(declarationPACDuClient);

	var declarationPACClientText = document.createTextNode("déclaration PAC");
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


function baseDeDonneesParcellesBertrand(numero){

		if(numero==1){


			/*on crée la culture précédente*/


			var culturePrecedenteDuClient = document.createElement('div');
	culturePrecedenteDuClient.id ='culturePrecedenteDuClient';
	var culturePrecedenteClientParent=document.getElementById('culturePrecedenteClient');

	culturePrecedenteClientParent.appendChild(culturePrecedenteDuClient);

	var culturePrecedenteClientText = document.createTextNode("Blé assolé");
	culturePrecedenteDuClient.appendChild(culturePrecedenteClientText);


			/*on crée la culture suivante*/


			var cultureSuivanteDuClient = document.createElement('div');
	cultureSuivanteDuClient.id ='cultureSuivanteDuClient';
	var cultureSuivanteClientParent=document.getElementById('cultureSuivanteClient');

	cultureSuivanteClientParent.appendChild(cultureSuivanteDuClient);

	var cultureSuivanteClientText = document.createTextNode("Blé assolé");
	cultureSuivanteDuClient.appendChild(cultureSuivanteClientText);


			/*on crée la date de récolte*/

			var dateRecolteDuClient = document.createElement('div');
	dateRecolteDuClient.id ='dateRecolteDuClient';
	var dateRecolteClientParent=document.getElementById('dateRecolteClient');

	dateRecolteClientParent.appendChild(dateRecolteDuClient);

	var dateRecolteClientText = document.createTextNode("02/02/2018");
	dateRecolteDuClient.appendChild(dateRecolteClientText);


			/*on crée le plan de fumure */

				var planFumureDuClient = document.createElement('a');
	planFumureDuClient.id ='planFumureDuClient';
	planFumureDuClient.href='/farmingData/Vandoorne/planFumure1_Vandoorne.pdf';
	var planFumureClientParent=document.getElementById('planFumureClient');

	planFumureClientParent.appendChild(planFumureDuClient);

	var planFumureClientText = document.createTextNode("Plan de fumure_Parcelle 1");
	planFumureDuClient.appendChild(planFumureClientText);


			/*on crée la cartographie de fertilisation*/


				var cartographieFertilisationDuClient = document.createElement('a');
	cartographieFertilisationDuClient.id ='cartographieFertilisationDuClient';
	cartographieFertilisationDuClient.href= '/farmingData/Vandoorne/cartographieFertilisation1_Vandoorne.pdf';
	var cartographieFertilisationClientParent=document.getElementById('cartographieFertilisationClient');

	cartographieFertilisationClientParent.appendChild(cartographieFertilisationDuClient);

	var cartographieFertilisationClientText = document.createTextNode("Cartographie de fertilisation_Parcelle 1");
	cartographieFertilisationDuClient.appendChild(cartographieFertilisationClientText);



			/*on crée es reliquats sortie d'hiver*/


				var reliquatsHiverDuClient = document.createElement('a');
	reliquatsHiverDuClient.id ='reliquatsHiverDuClient';
	reliquatsHiverDuClient.href='/farmingData/Vandoorne/reliquatHiver1_Vandoorne.pdf'
	var reliquatsHiverClientParent=document.getElementById('reliquatsHiverClient');

	reliquatsHiverClientParent.appendChild(reliquatsHiverDuClient);

	var reliquatsHiverClientText = document.createTextNode("Reliquats sorties d'hiver_Parcelle 1");
	reliquatsHiverDuClient.appendChild(reliquatsHiverClientText);

				/*on crée l'analyse sol*/


				var analyseSolDuClient = document.createElement('a');
	analyseSolDuClient.id ='analyseSolDuClient';
	analyseSolDuClient.href='/farmingData/Vandoorne/analyseSol1_Vandoorne.pdf';
	var analyseSolClientParent=document.getElementById('analyseSolClient');

	analyseSolClientParent.appendChild(analyseSolDuClient);

	var analyseSolClientText = document.createTextNode("analyse du sol_Parcelle 1");
	analyseSolDuClient.appendChild(analyseSolClientText);


			/*on crée le type de semoir*/


				var typeSemoirDuClient = document.createElement('div');
	typeSemoirDuClient.id ='typeSemoirDuClient';
	var typeSemoirClientParent=document.getElementById('typeSemoirClient');

	typeSemoirClientParent.appendChild(typeSemoirDuClient);

	var typeSemoirClientText = document.createTextNode("Semoirs à céréales");
	typeSemoirDuClient.appendChild(typeSemoirClientText);

			/*on crée le mode de destruction*/


				var modeDestructionDuClient = document.createElement('div');
	modeDestructionDuClient.id ='modeDestructionDuClient';
	var modeDestructionClientParent=document.getElementById('modeDestructionClient');

	modeDestructionClientParent.appendChild(modeDestructionDuClient);

	var modeDestructionClientText = document.createTextNode("Gel");
	modeDestructionDuClient.appendChild(modeDestructionClientText);


			/*on crée les problèmes de la parcelle*/


				var problemeParcelleDuClient = document.createElement('div');
	problemeParcelleDuClient.id ='problemeParcelleDuClient';
	var problemeParcelleClientParent=document.getElementById('problemeParcelleClient');

	problemeParcelleClientParent.appendChild(problemeParcelleDuClient);

	var problemeParcelleClientText = document.createTextNode("Adventices");
	problemeParcelleDuClient.appendChild(problemeParcelleClientText);



			/*on crée le rendement*/


				var leRendementDuClient = document.createElement('div');
	leRendementDuClient.id ='leRendementDuClient';
	var leRendementClientParent=document.getElementById('leRendementClient');

	leRendementClientParent.appendChild(leRendementDuClient);

	var leRendementClientText = document.createTextNode("78");
	leRendementDuClient.appendChild(leRendementClientText);



			/*on crée la cartographie de rendement*/



				var cartographieRendementDuClient = document.createElement('a');
	cartographieRendementDuClient.id ='cartographieRendementDuClient';
	cartographieRendementDuClient.href= '/farmingData/Vandoorne/cartographieRendement1_Vandoorne.pdf';
	var cartographieRendementClientParent=document.getElementById('cartographieRendementClient');

	cartographieRendementClientParent.appendChild(cartographieRendementDuClient);

	var cartographieRendementClientText = document.createTextNode("Cartographie de rendement_Parcelle 1");
	cartographieRendementDuClient.appendChild(cartographieRendementClientText);

			/*on vrée la remarque parcelle*/

		var remarqueDuClient = document.createElement('div');
	remarqueDuClient.id ='remarqueDuClient';
	var remarqueClientParent=document.getElementById('remarqueClient');

	remarqueClientParent.appendChild(remarqueDuClient);

	var remarqueClientText = document.createTextNode("Rendement en baisse");
	remarqueDuClient.appendChild(remarqueClientText);

}

if(numero==2){

	
			/*on crée la culture précédente*/


			var culturePrecedenteDuClient = document.createElement('div');
	culturePrecedenteDuClient.id ='culturePrecedenteDuClient';
	var culturePrecedenteClientParent=document.getElementById('culturePrecedenteClient');

	culturePrecedenteClientParent.appendChild(culturePrecedenteDuClient);

	var culturePrecedenteClientText = document.createTextNode("Blé de blé");
	culturePrecedenteDuClient.appendChild(culturePrecedenteClientText);


			/*on crée la culture suivante*/


			var cultureSuivanteDuClient = document.createElement('div');
	cultureSuivanteDuClient.id ='cultureSuivanteDuClient';
	var cultureSuivanteClientParent=document.getElementById('cultureSuivanteClient');

	cultureSuivanteClientParent.appendChild(cultureSuivanteDuClient);

	var cultureSuivanteClientText = document.createTextNode("Blé de blé");
	cultureSuivanteDuClient.appendChild(cultureSuivanteClientText);


			/*on crée la date de récolte*/

			var dateRecolteDuClient = document.createElement('div');
	dateRecolteDuClient.id ='dateRecolteDuClient';
	var dateRecolteClientParent=document.getElementById('dateRecolteClient');

	dateRecolteClientParent.appendChild(dateRecolteDuClient);

	var dateRecolteClientText = document.createTextNode("10/03/2018");
	dateRecolteDuClient.appendChild(dateRecolteClientText);


			/*on crée le plan de fumure */

				var planFumureDuClient = document.createElement('a');
	planFumureDuClient.id ='planFumureDuClient';
	planFumureDuClient.href='/farmingData/Vandoorne/planFumure2_Vandoorne.pdf';
	var planFumureClientParent=document.getElementById('planFumureClient');

	planFumureClientParent.appendChild(planFumureDuClient);

	var planFumureClientText = document.createTextNode("Plan de fumure_Parcelle 2");
	planFumureDuClient.appendChild(planFumureClientText);


			/*on crée la cartographie de fertilisation*/


				var cartographieFertilisationDuClient = document.createElement('a');
	cartographieFertilisationDuClient.id ='cartographieFertilisationDuClient';
	cartographieFertilisationDuClient.href= '/farmingData/Vandoorne/cartographieFertilisation2_Vandoorne.pdf';
	var cartographieFertilisationClientParent=document.getElementById('cartographieFertilisationClient');

	cartographieFertilisationClientParent.appendChild(cartographieFertilisationDuClient);

	var cartographieFertilisationClientText = document.createTextNode("Cartographie de fertilisation_Parcelle 2");
	cartographieFertilisationDuClient.appendChild(cartographieFertilisationClientText);



			/*on crée es reliquats sortie d'hiver*/


				var reliquatsHiverDuClient = document.createElement('a');
	reliquatsHiverDuClient.id ='reliquatsHiverDuClient';
	reliquatsHiverDuClient.href='/farmingData/Vandoorne/reliquatHiver2_Vandoorne.pdf'
	var reliquatsHiverClientParent=document.getElementById('reliquatsHiverClient');

	reliquatsHiverClientParent.appendChild(reliquatsHiverDuClient);

	var reliquatsHiverClientText = document.createTextNode("Reliquats sorties d'hiver_Parcelle 2");
	reliquatsHiverDuClient.appendChild(reliquatsHiverClientText);

				/*on crée l'analyse sol*/


				var analyseSolDuClient = document.createElement('a');
	analyseSolDuClient.id ='analyseSolDuClient';
	analyseSolDuClient.href='/farmingData/Vandoorne/analyseSol2_Vandoorne.pdf';
	var analyseSolClientParent=document.getElementById('analyseSolClient');

	analyseSolClientParent.appendChild(analyseSolDuClient);

	var analyseSolClientText = document.createTextNode("analyse du sol_Parcelle 2");
	analyseSolDuClient.appendChild(analyseSolClientText);


			/*on crée le type de semoir*/


				var typeSemoirDuClient = document.createElement('div');
	typeSemoirDuClient.id ='typeSemoirDuClient';
	var typeSemoirClientParent=document.getElementById('typeSemoirClient');

	typeSemoirClientParent.appendChild(typeSemoirDuClient);

	var typeSemoirClientText = document.createTextNode("Semoirs à céréales");
	typeSemoirDuClient.appendChild(typeSemoirClientText);

			/*on crée le mode de destruction*/


				var modeDestructionDuClient = document.createElement('div');
	modeDestructionDuClient.id ='modeDestructionDuClient';
	var modeDestructionClientParent=document.getElementById('modeDestructionClient');

	modeDestructionClientParent.appendChild(modeDestructionDuClient);

	var modeDestructionClientText = document.createTextNode("Gel");
	modeDestructionDuClient.appendChild(modeDestructionClientText);


			/*on crée les problèmes de la parcelle*/


				var problemeParcelleDuClient = document.createElement('div');
	problemeParcelleDuClient.id ='problemeParcelleDuClient';
	var problemeParcelleClientParent=document.getElementById('problemeParcelleClient');

	problemeParcelleClientParent.appendChild(problemeParcelleDuClient);

	var problemeParcelleClientText = document.createTextNode("Adventices");
	problemeParcelleDuClient.appendChild(problemeParcelleClientText);



			/*on crée le rendement*/


				var leRendementDuClient = document.createElement('div');
	leRendementDuClient.id ='leRendementDuClient';
	var leRendementClientParent=document.getElementById('leRendementClient');

	leRendementClientParent.appendChild(leRendementDuClient);

	var leRendementClientText = document.createTextNode("80");
	leRendementDuClient.appendChild(leRendementClientText);



			/*on crée la cartographie de rendement*/



				var cartographieRendementDuClient = document.createElement('a');
	cartographieRendementDuClient.id ='cartographieRendementDuClient';
	cartographieRendementDuClient.href= '/farmingData/Vandoorne/cartographieRendement2_Vandoorne.pdf';
	var cartographieRendementClientParent=document.getElementById('cartographieRendementClient');

	cartographieRendementClientParent.appendChild(cartographieRendementDuClient);

	var cartographieRendementClientText = document.createTextNode("Cartographie de rendement_Parcelle 2");
	cartographieRendementDuClient.appendChild(cartographieRendementClientText);

			/*on vrée la remarque parcelle*/

		var remarqueDuClient = document.createElement('div');
	remarqueDuClient.id ='remarqueDuClient';
	var remarqueClientParent=document.getElementById('remarqueClient');

	remarqueClientParent.appendChild(remarqueDuClient);

	var remarqueClientText = document.createTextNode("Rendement en baisse");
	remarqueDuClient.appendChild(remarqueClientText);

}


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

		var nomClientParent=document.getElementById('LenomClient');
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




/**/
/**/
/**/
/*fonction qui supprime les éléments de la base de données
concernant la parcelle du client sélectionner losque l'administrateur
appuie sur retour ver le client*/
/**/
/**/
/**/

	


	function voirCarteClient(){

		document.getElementById('pageCarte').style.display='block';
		document.getElementById('informationsPersonnellesClient').style.display= 'none';
		document.getElementById('informationsAgricolesClient').style.display= 'none';
		document.getElementById('retour').style.display= 'none';
	}


	function supprimerParcelle(){
		if (nouveauClient=='ihaddadene'){
		var parcelle =[];
		var nombreParcelle= 1

		for(var i=1; i<=nombreParcelle; i++){

		parcelle[i]= document.getElementById(i);
		document.getElementById('parcellesClient').removeChild(parcelle[i]);

	}
}

		if (nouveauClient=='vandoorne'){
			var parcelle =[];
			var nombreParcelle= 2

			for(var i=1; i<=nombreParcelle; i++){

				parcelle[i]= document.getElementById(i);
				document.getElementById('parcellesClient').removeChild(parcelle[i]);

		}
}

}