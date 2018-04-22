

/*fonction pour récupérer le fichier joint
on l'insère dans le dossier farmingData*/
// Event to handle uploads files

app.post('/upload', function(req, res){

  // create an incoming form object
  var form = new formidable.IncomingForm();

  // specify that we want to allow the user to upload multiple files in a single request
  form.multiples = true;
  
  var dir = "/Ressources/farmingData/";

  // store all uploads in the /uploads directory
  form.uploadDir = path.join(__dirname, dir);

  // every time a file has been uploaded successfully,
  // rename it to it's orignal name
  form.on('file', function(field, file) {
    fs.rename(file.path, path.join(form.uploadDir, file.name));
  });

  // log any errors that occur
  form.on('error', function(err) {
    console.log('An error has occured: \n' + err);
  });

  // once all the files have been uploaded, send a response to the client
  form.on('end', function() {
    res.end('success');
  });

  // parse the incoming request containing the form data
  form.parse(req);

});




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
	
	 alert(nouveauClient);
	 cheminFichier(nouveauClient);
});
	 
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
supprimerBaseDeDonneesParcelleClient();