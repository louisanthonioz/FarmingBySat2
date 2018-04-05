var nom;
var prenom;
var telephone;
var adrsseMail;
var rue;
var codePostal;
var ville;
var parcelles= document.getElementById('parcellesClient').value;
alert(parcelles);

creerParcelleLien();



function creerParcelleLien(){

	var parcelle= document.createElement('a');
	parcelle.id='parcelle';
	parcelle.href ='infoClient.html';


	document.getElementById('').appendChild(parcelle);

	var parcelleText = document.createTextNode("Parcelle");
	parcelle.appendChild(parcelleText);

	


}
