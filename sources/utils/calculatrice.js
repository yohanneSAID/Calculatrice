export default function Calculatrice(valeur) {
  let i = 0, i2 = 0, j = 0, j2 = 0, k = 0, k2 = 0, l = 0, l2 = 0;
  let nombre1 = '', nombre1B = '', nombre2 = '', nombre2B = '';
  let resultat = 0, resultat2 = 0;

  let valeur2PlusMoins = '';
  let indiceOperateur = 0, indiceOperateur2 = 0;
  let nombreOperation = 0, nombreOperation2 = 0;


  valeur = valeur.replace(/(\d+(\.\d+)?)%/g, (match, number) => {
    return parseFloat(number) / 100;
  });

  // Compter les opérations * ou /
  for (l = 0; l < valeur.length; l++) {
    if (valeur[l] === '*' || valeur[l] === '/') {
      nombreOperation++;
    }
  }

  while (nombreOperation > 0) {
    for (i = 0; i < valeur.length; i++) {
      if (valeur[i] === '*' || valeur[i] === '/') {
        indiceOperateur = i;
        break;
      }
    }

    for (j = indiceOperateur - 1; j >= 0; j--) {
      if (valeur[j] === '+' || valeur[j] === '-') {
        break;
      }
      nombre1 += valeur[j];
    }

    for (k = indiceOperateur + 1; k < valeur.length; k++) {
      if ("+-*/".includes(valeur[k])) {
        break;
      }
      nombre2 += valeur[k];
    }

    nombre1 = nombre1.split('').reverse().join('');

    if (valeur[indiceOperateur] === '*') {
      resultat = parseFloat(nombre1) * parseFloat(nombre2);
      valeur = valeur.replace(nombre1 + '*' + nombre2, String(resultat));
    } else if (valeur[indiceOperateur] === '/') {
      resultat = parseFloat(nombre1) / parseFloat(nombre2);
      valeur = valeur.replace(nombre1 + '/' + nombre2, String(resultat));
    }

    nombre1 = ''; nombre2 = ''; i = 0; j = 0; k = 0; indiceOperateur = 0;
    nombreOperation--;
  }

  valeur2PlusMoins = valeur;

  for (l2 = 0; l2 < valeur2PlusMoins.length; l2++) {
    if (valeur2PlusMoins[l2] === '+' || valeur2PlusMoins[l2] === '-') {
      nombreOperation2++;
    }
  }

  if (valeur2PlusMoins[0] === '-') {
    nombreOperation2--;
  }

  while (nombreOperation2 > 0) {
    for (i2 = 1; i2 < valeur2PlusMoins.length; i2++) {
      if (valeur2PlusMoins[i2] === '+' || valeur2PlusMoins[i2] === '-') {
        indiceOperateur2 = i2;
        break;
      }
    }

    for (j2 = 0; j2 < indiceOperateur2; j2++) {
      nombre1B += valeur2PlusMoins[j2];
    }

    for (k2 = indiceOperateur2 + 1; k2 < valeur2PlusMoins.length; k2++) {
      if (valeur2PlusMoins[k2] === '+' || valeur2PlusMoins[k2] === '-') {
        break;
      }
      nombre2B += valeur2PlusMoins[k2];
    }

    if (valeur2PlusMoins[indiceOperateur2] === '+') {
      resultat2 = parseFloat(nombre1B) + parseFloat(nombre2B);
      valeur2PlusMoins = valeur2PlusMoins.replace(nombre1B + '+' + nombre2B, String(resultat2));
    } else if (valeur2PlusMoins[indiceOperateur2] === '-') {
      resultat2 = parseFloat(nombre1B) - parseFloat(nombre2B);
      valeur2PlusMoins = valeur2PlusMoins.replace(nombre1B + '-' + nombre2B, String(resultat2));
    }

    nombre1B = ''; nombre2B = ''; i2 = 0; j2 = 0; k2 = 0; indiceOperateur2 = 0;
    nombreOperation2--;
  }

  return parseFloat(valeur2PlusMoins);
}
