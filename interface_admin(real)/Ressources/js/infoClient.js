

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



/*permet de récuperer le numéro de la parcelle*/

var numero = $(this).attr('id');

alert('le numéro est : '+ numero);


var numeroParcelle = document.createElement('h2');
numeroParcelle.id= 'numeroParcelle';
document.getElementById('mettreNumeroParcelle').appendChild(numeroParcelle);
var numeroParcelleText = document.createTextNode('Parcelle '+numero);
numeroParcelle.appendChild(numeroParcelleText);

	
}



/**/
/**/
/*fonction qui permet de revenir sur la page client
 lorsqu'on est sur une page parcelle*/
/**/
/**/
/**/
		
 function retour3(){
 	document.getElementById('renseignementClientPage2').style.display='none';
	document.getElementById('informationsPersonnellesClient').style.display= 'block';
	document.getElementById('informationsAgricolesClient').style.display= 'block';

/*supprime les éléments incrit dans la page.*/

	var numeroParcelleEnfant= document.getElementById('numeroParcelle');
		var numeroParcelleParent= document.getElementById('mettreNumeroParcelle');
		numeroParcelleParent.removeChild(numeroParcelleEnfant);
		

 }

