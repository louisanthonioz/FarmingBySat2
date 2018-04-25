 // Connect with socket io
 var socket = io.connect('http://localhost:8080');


var connect=0; 
var nom;
var prenom;
var numero;
var adresse;
var ville;
var email;
var rotPrecedente;
var rotNouvelle;
var fumur;
var rdtClient;
var avisClient;
var fertFarmStarNameClient;
var anaSolNameClient;
var bilanNamesClient;
var cartoRdtNameClient;
var daterecolteClient;
var semoirsClient;
var modeDestructionClient;
var remParcelleClient;
var compactionsClient;
var adventicesClient;
var maladiesClient;
var ravageursClient;

/*  Receivers  */

// Receive connection's confirmation from server
socket.on('message', function(message) {
  alert('Le serveur a un message pour vous : '+message);
});
 
 
function receiveInfosClients(){

    socket.on('name', function(name){
    });
    socket.on('firstname', function(firstname){
    });    
    socket.on('number', function(number){
    });
    socket.on('adress', function(adress){
    });
    socket.on('city', function(city){
    });
    socket.on('mail', function(mail){
    });                           
}



function deleteAClient(ClientIDToDelete){
    socket.emit('clientNameToDelete', Clientname);
}

function addAnAdmin(adminName, password){
    socket.emit('newAdminName', adminName);
    socket.emit('newPassword', password);
}

function changeAdminPsw(adminName, passwordToChange){
    socket.emit('adminName', adminName);
    socket.emit('passwordToChange', passwordToChange);
}

    
function adminLogin(adminName, password){
    socket.emit('adminName', adminName);
    socket.emit('password', password);
    socket.on('ok', function (ok){
        connect = ok;
        console.log(connect);
    });
}


function lookForAClient(clientName){
    socket.emit('clientNameToFind', clientName);
    socket.on('name', function(name){
        console.log(name);
        nom = name;
    });
    socket.on('firstname', function(firstname){
        console.log(firstname);
        prenom = firstname;
    });    
    socket.on('number', function(number){
        console.log(number);
        numero = number;
    });
    socket.on('adress', function(adress){
        console.log(adress);
        adresse = adress;
    });
    socket.on('city', function(city){
        console.log(city);
        ville = city
    });
    socket.on('mail', function(mail){
        console.log(mail);
        email = mail;
    });
    socket.on('precRot', function(precRot){
        rotPrecedente = precRot;
    });
    socket.on('nextRot', function(nextRot){
        rotNouvelle = nextRot;
    });
    socket.on('fumureName', function(fumureName){
        fumur = fumureName;
    });
    socket.on('rdt', function(rdt){
        rdtClient = rdt
    });
    socket.on('avis', function(avis){
        avisClient = avis;
    });
    socket.on('fertFarmStarName', function(fertFarmStarName){
        fertFarmStarNameClient = fertFarmStarName;
    });
    socket.on('anaSolName', function(anaSolName){
        anaSolNameClient = anaSolName;
    });
    socket.on('bilanNames', function(bilanNames){
        bilanNamesClient = bilanNames;
    });
    socket.on('cartoRdtName', function(cartoRdtName){
        cartoRdtNameClient = cartoRdtName;
    });
    socket.on('daterecolte', function(daterecolte){
        daterecolteClient = daterecolte;
    });
    socket.on('semoirs', function(semoirs){
        semoirsClient : semoirs;
    });
    socket.on('modeDestruction', function(modeDestruction){
        modeDestructionClient = modeDestruction;
    });
    socket.on('remParcelle', function(remParcelle){
        remParcelleClient = remParcelle;
    });
    socket.on('compactions', function(compactions){
        compactionsClient = compactions;
    });
    socket.on('adventices', function(adventices){
        adventicesClient = adventices;
    });
    socket.on('maladies', function(maladies){
        maladiesClient = maladies;
    });
    socket.on('ravageurs', function(ravageurs){
        ravageursClient = ravageurs;
    });
}