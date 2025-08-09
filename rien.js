/*function WTF() {
  let a = '2'; let b = '4';
  let c = parseInt(a) + parseInt(b);
  return c;

}*/
/*function WTF() {
  let valeur = '2+5';

  let premierChiffre = parseInt(valeur[0]);
  let deuxiemeChiffre = parseInt(valeur[2]);
  let resulat = premierChiffre + deuxiemeChiffre;
  return resulat;

}*/
/*
function WTF() {
  let valeur = '24+5';
  let premierChiffre = parseInt(valeur[0] + valeur[1]);
  let deuxiemeChiffre = parseInt(valeur[3]);
  let resulat = premierChiffre + deuxiemeChiffre;
  return resulat;
}*/
/*let valeur = '24+5';
let premierChiffre = '';
let deuxiemeChiffre = '';
let indicePlus = 0;
//Determination du '+'
for (let i = 0; i < valeur.length; i++) {
  if (valeur[i] == '+') {
    indicePlus = i;
    break;
  }
}

//Determination du premier nombre
for (let j = 0; j < indicePlus; j++) {
  premierChiffre = premierChiffre + valeur[j];
}

//Détermination du deuxième nombre:
for (let e = indicePlus + 1; e < valeur.length; e++) {
  deuxiemeChiffre = deuxiemeChiffre + valeur[e];
}
let resulat = parseInt(premierChiffre) + parseInt(deuxiemeChiffre);
return resulat;*/

/*let valeur = '2-587';
let premierChiffre = '';
let deuxiemeChiffre = '';
let indiceMoins = '0';
// Détermination du moins:
for (let i = 0; i < valeur.length; i++) {
  if (valeur[i] == '-') {
    indiceMoins = i;
    break;
  }
}

//Détermination du premierChiffre:
for (let j = 0; j < indiceMoins; j++) {
  premierChiffre = premierChiffre + valeur[j];
}

//Détermination du deuxièmeChiffre:
for (let k = indiceMoins + 1; k < valeur.length; k++) {
  deuxiemeChiffre = deuxiemeChiffre + valeur[k];
}
let resulat = parseInt(premierChiffre) - parseInt(deuxiemeChiffre);
return resulat;************************************************************************/
/*
  let valeur = '5+6+7';
  let premierChiffre = '';
  let deuxiemeChiffre = '';
  let troisiemeChiffre = '';
  let indicePlus = 0;
  let indicePlus2 = 0;
  //Determination du '+'
  for (let i = 0; i < valeur.length; i++) {
    if (valeur[i] == '+') {
      indicePlus = i;
      break;
    }
  }
  //Determination du premier nombre
  for (let j = 0; j < indicePlus; j++) {
    premierChiffre = premierChiffre + valeur[j];
  }

  //Détermination du deuxièmeChiffre:
  for (let l = indicePlus + 1; l < valeur.length - 2; l++) {
    deuxiemeChiffre = deuxiemeChiffre + valeur[l];
  }

  //Détermination du dernierChiffre:
  for (let k = indicePlus + 1; k < valeur.length; k++) {
    troisiemeChiffre = valeur[k];
  }


  //Determination du deuxième '+'
  for (let i2 = deuxiemeChiffre + 1; i2 > deuxiemeChiffre; i2++) {
    if (valeur[i2] == '+') {
      indicePlus2 = i2;
      break;
    }
  }
  return indicePlus2;
}*/
function WTF() {
  let valeur = '24+5';
  let premierChiffre = '';
  let deuxiemeChiffre = '';
  let indicePlus = 0;
  //Determination du '+'
  for (let i = 0; i < valeur.length; i++) {
    if (valeur[i] == '+') {
      indicePlus = i;
      break;
    }
  }

  //Determination du premier nombre
  for (let j = 0; j < indicePlus; j++) {
    premierChiffre = premierChiffre + valeur[j];
  }

  //Détermination du deuxième nombre:
  for (let e = indicePlus + 1; e < valeur.length; e++) {
    deuxiemeChiffre = deuxiemeChiffre + valeur[e];
  }
  let resulat = parseInt(premierChiffre) + parseInt(deuxiemeChiffre);
  return resulat;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text> le résultat est {WTF()} </Text>
      <StatusBar style="auto" />
    </View>
  );
}