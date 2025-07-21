/*function WTF() {
  let valeur = '2+10+2';
  let i = 0;
  let j = 0;
  let k = 0;
  let l = 0;
  let nombre1 = '';
  let nombre2 = '';
  let resultat = 0;

  let indicePremierPlus = 0;
  let nombreOperation = 0;

  //savoir le nombre de fois où on fait l'operation
  for (l = 0; l < valeur.length; l++) {
    if (valeur[l] == '+') {
      nombreOperation = nombreOperation + 1;
    }
  }

  while (nombreOperation > 0) {

    //determinatioin de l'indice du 1er signe '+'
    for (i = 0; i < valeur.length; i++) {
      if (valeur[i] == '+') {
        indicePremierPlus = i;
        break;
      }
    }

    //determination du 1er nombre
    for (j = 0; j < indicePremierPlus; j++) {
      nombre1 = nombre1 + valeur[j];
    }

    //determination du 2e nombre
    for (k = indicePremierPlus + 1; k < valeur.length; k++) {
      if (valeur[k] == '+') {
        break;
      }
      nombre2 = nombre2 + valeur[k];
    }

    //faire le calcul
    resultat = parseInt(nombre1) + parseInt(nombre2);

    //changement de phrase
    valeur = valeur.replace(nombre1 + '+' + nombre2, String(resultat));

    //reinitialiser les variables pour l'utiliser deuxieme fois
    nombre1 = ''; nombre2 = ''; i = 0; j = 0; k = 0;

    nombreOperation = nombreOperation - 1;
  }

  return resultat;

}*/
function Calculatrice() {
    let valeur = '-1+2*2/2+2';
    let i = 0;
    let i2 = 0;
    let j = 0;
    let j2 = 0;
    let k = 0;
    let k2 = 0;
    let l = 0;
    let l2 = 0;
    let nombre1 = '';
    let nombre1B = '';
    let nombre2 = '';
    let nombre2B = '';
    let resultat = 0;
    let resultat2 = 0;

    let valeur2PlusMoins = '';
    let indiceOperateur = 0;
    let indiceOperateur2 = 0;
    let nombreOperation = 0;
    let nombreOperation2 = 0;

    //savoir le nombre de fois où on fait l'operation
    for (l = 0; l < valeur.length; l++) {
        if (valeur[l] == '*' || valeur[l] == '/') {
            nombreOperation = nombreOperation + 1;
        }
    }

    while (nombreOperation > 0) {

        //détermination de l'indice du 1er (signe)
        for (i = 0; i < valeur.length; i++) {
            if (valeur[i] == '*' || valeur[i] == '/') {
                indiceOperateur = i;
                break;
            }
        }

        //détermination du 1er nombre
        for (j = indiceOperateur - 1; j >= 0; j--) {
            if (valeur[j] == '+' || valeur[j] == '-') {
                break;
            }
            nombre1 = nombre1 + valeur[j];
        }

        //détermination du 2e nombre
        for (k = indiceOperateur + 1; k < valeur.length; k++) {
            if (valeur[k] == '*' || valeur[k] == '/' || valeur[k] == '+' || valeur[k] == '-') {
                break;
            }
            nombre2 = nombre2 + valeur[k];
        }

        //on inverse le nombre1
        nombre1 = nombre1.split('').reverse().join('');

        //faire le calcul : on test si c'est + ou -
        if (valeur[indiceOperateur] == '*') {
            resultat = parseFloat(nombre1) * parseFloat(nombre2);
            //changement de phrase
            valeur = valeur.replace(nombre1 + '*' + nombre2, String(resultat));
        }
        else if (valeur[indiceOperateur] == '/') {
            resultat = parseFloat(nombre1) / parseFloat(nombre2);
            //changement de phrase
            valeur = valeur.replace(nombre1 + '/' + nombre2, String(resultat));
        }

        //réinitialiser les variables pour l'utiliser deuxième fois
        nombre1 = ''; nombre2 = ''; i = 0; j = 0; k = 0; indiceOperateur = '';

        nombreOperation = nombreOperation - 1;
    }



    valeur2PlusMoins = valeur;


    /* ********************************************|| PLUS OU MOINS ||***************************************** */
    //savoir le nombre de fois où on fait l'operation
    for (l2 = 0; l2 < valeur2PlusMoins.length; l2++) {
        if (valeur2PlusMoins[l2] == '+' || valeur2PlusMoins[l2] == '-') {
            nombreOperation2 = nombreOperation2 + 1;
        }

    }
    if (valeur2PlusMoins[0] == '-') {
        nombreOperation2 = nombreOperation2 - 1;
    }

    while (nombreOperation2 > 0) {

        //détermination de l'indice du 1er (signe)
        for (i2 = 1; i2 < valeur2PlusMoins.length; i2++) {
            if (valeur2PlusMoins[i2] == '+' || valeur2PlusMoins[i2] == '-') {
                indiceOperateur2 = i2;
                break;
            }
        }

        //détermination du 1er nombre
        for (j2 = 0; j2 < indiceOperateur2; j2++) {
            nombre1B = nombre1B + valeur2PlusMoins[j2];
        }

        //détermination du 2e nombre
        for (k2 = indiceOperateur2 + 1; k2 < valeur2PlusMoins.length; k2++) {
            if (valeur2PlusMoins[k2] == '+' || valeur2PlusMoins[k2] == '-') {
                break;
            }
            nombre2B = nombre2B + valeur2PlusMoins[k2];
        }

        //faire le calcul : on test si c'est + ou -
        if (valeur2PlusMoins[indiceOperateur2] == '+') {
            resultat2 = parseFloat(nombre1B) + parseFloat(nombre2B);
            //changement de phrase
            valeur2PlusMoins = valeur2PlusMoins.replace(nombre1B + '+' + nombre2B, String(resultat2));

        }
        else if (valeur2PlusMoins[indiceOperateur2] == '-') {
            resultat2 = parseFloat(nombre1B) - parseFloat(nombre2B);
            //changement de phrase
            valeur2PlusMoins = valeur2PlusMoins.replace(nombre1B + '-' + nombre2B, String(resultat2));

        }
        nombre1B = ''; nombre2B = ''; i2 = 0; j2 = 0; k2 = 0; indiceOperateur2 = '';

        nombreOperation2 = nombreOperation2 - 1;
    }

    return resultat2;
}