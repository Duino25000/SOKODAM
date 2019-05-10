// CREATION VARIABLE C'EST UNE ARRAY

var levelCourant = [];
var dkPosX = 0;
var dkPosY = 0;

//CREATION DES EVENEMENTS

document.onkeyup = function(e){

    deplacementDk(e);
}

// APPEL DES FONCTIONS

lectureFichier(level1);
creationTab();

// FONCTIONS

function lectureFichier(_level){

    // On recupère la map externe
    levelCourant = _level; 
}


function creationTab(){

// On récupère le tableau html
    var tab = document.getElementById('tab');


// On récupère chaque ligne de la map
    for(ligne = 0; ligne < levelCourant.length; ligne++){

        //On crée  la ligne en html
        var row = document.createElement('tr');
        // On récupère chaque case de ligne en cours (cellule)
        for(cellule = 0; cellule < levelCourant[ligne].length; cellule++ ){

            //On crée la cellule en HTML
            var cell = document.createElement('td');
            cell.id = cellule + '-' + ligne; // On lui donne comme nom d'id ses coordonnées
            cell.contenu = levelCourant[ligne][cellule];// On attribue le contenu à la cellule

            //Attribution du background selon contenu
            switch(cell.contenu){

                case 'm': 
                    cell.classList.add('mur');
                    break; 

                case 'b': 
                    cell.classList.add('banane');
                    break; 

                case 'a': 
                    cell.classList.add('arrive');
                    break; 

                case 'p': 
                    cell.classList.add('dk');
                    dkPosX = cellule;
                    dkPosY = ligne;
                    break; 

                case 'f': 
                    cell.classList.add('arriveBanane');
                    break; 
            }
            //Ici on définit row comme parent de cell 
            row.appendChild(cell);
        
        }
        //Ici on définit tab comme parent de row 
        tab.appendChild(row);
    }
}

function deplacementDk(_event){

    var celluleCourante = document.getElementById(dkPosX +'-'+ dkPosY);

console.log(dkPosX +'-'+ dkPosY);
    switch(_event.keyCode){

        case(37): //GAUCHE

            var celluleVoisine = document.getElementById((dkPosX-1) + '-' + dkPosY);
            
            if(celluleVoisine.contenu == 'v'){

                removeClassPerso(celluleCourante);

                celluleVoisine.classList.add('dk');
            }
            else if (celluleVoisine.contenu == 'a'){

                removeClassPerso(celluleCourante);

                celluleVoisine.classList.add('arriveDk');
            }

            dkPosX--;
            
            break;

            case(39): //DROITE
            var contenuVoisin = document.getElementById((dkPosX+1) + '-' + dkPosY).contenu;
            console.log(contenuVoisin);
            break;

            case(38): //HAUT
            var contenuVoisin = document.getElementById(dkPosX + '-' + (dkPosY-1)).contenu;
            console.log(contenuVoisin);
            break;

            case(40): //BAS
            var contenuVoisin = document.getElementById(dkPosX + '-' + (dkPosY+1)).contenu;
            console.log(contenuVoisin);
            break;
    }
}

// FONCTION REMOVE CLASS PERSO

function removeClassPerso(_cellule){

    // _cellule.classList.remove('persoGauche');
    // _cellule.classList.remove('persoDroite');
    // _cellule.classList.remove('persoHaut');
    _cellule.classList.remove('dk');
    

    if(_cellule.classList.contains('arriveDk')){

        _cellule.classList.remove('arriveDk');
        _cellule.classList.add('arrive');
        _cellule.contenu = 'a';
    }
    else{

        _cellule.classList.remove('dk');
        _cellule.contenu = 'v';

    }
}

