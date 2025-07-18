import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

/*function faireCalcul(phrase) {
  let nbrOperaterFoisOuDivision = 0;
  let indicePremierOperateurFoisOuDivision = 0;
  let dernierIndiceAvantFoisOuDivisionRepererAvant = 0;
  let nombre1 = '';
  let nombre2 = '';
  let nombre1EnSensNormal = '';
  let resultatFoisOuDivision = 0;
  let nouveauPhrase = '';
  let i = 0; let j = 0; let k = 0; let l = 0; let m = 0; let n = 0; let o = 0;

  //connaitre le nombre des operateurs * ou / en premier
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] == '*' || phrase[i] == '/') {
      nbrOperaterFoisOuDivision += 1;
    }
  }

  //faire le calcul de * et / en priorité
  while (nbrOperaterFoisOuDivision > 0) {

    //Réperer le premier operateur * ou /
    for (j = 0; j < phrase.length; j++) {
      if (phrase[j] == '*' || phrase[j] == '/') {

        //recuperer le premier nombre
        for (k = j - 1; k >= 0; k--) {
          if (phrase[k] == '*' || phrase[k] == '/' || phrase[k] == '+' || phrase[k] == '-') {
            break;
          }
          nombre1 = nombre1 + phrase[k];
        }

        //recuperer le deuxieme nombre
        for (l = j + 1; l < phrase.length; l++) {
          if (phrase[l] == '*' || phrase[l] == '/' || phrase[l] == '+' || phrase[l] == '-') {
            break;
          }
          nombre2 = nombre2 + phrase[l];
        }

        //pour permettre de recuperer l'indice de premier Operateur * ou / en bas ('j') 
        break;
      }
    }

    //renverser le nombre1 car on l'a fait de sens inverse
    nombre1EnSensNormal = nombre1.split('').reverse().join('');

    //faire l'operation
    if (phrase[j] == '*') {
      resultatFoisOuDivision = parseFloat(nombre1EnSensNormal) * parseFloat(nombre2);
      //changement dans la phrase
      phrase = phrase.replace(nombre1 + '*' + nombre2, String(resultatFoisOuDivision));
    }
    else if (phrase[j] == '/') {
      resultatFoisOuDivision = parseFloat(nombre1EnSensNormal) / parseFloat(nombre2);
      //changement dans la phrase
      phrase = phrase.replace(nombre1 + '/' + nombre2, String(resultatFoisOuDivision));
    }

    //reinitialiser les variables
    j = 0; k = 0; l = 0; nombre1 = ''; nombre2 = ''; nombre1EnSensNormal = ''; resultatFoisOuDivision = 0;

    nbrOperaterFoisOuDivision--;
  }

  return phrase;

}*/

function faireCalcul() {
  let valeur = '2+5+2';
  let i = 0;
  let j = 0;
  let k = 0;
  let l = 0;
  let nombre1 = '';
  let nombre2 = '';
  let resultat = 0;
  let nouveauValeur = '';
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

}

export default function App() {
  const [phrase, setPhrase] = useState('');
  const [affichePhrase, setAffichePhrase] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput style={{ backgroundColor: 'black', width: '100%', color: 'white' }} value={phrase} onChangeText={(phrase) => setPhrase(phrase)} />

      <TouchableOpacity onPress={() => setAffichePhrase(true)}>
        <Text style={{ color: 'blue', marginTop: 10 }}>Afficher Le résultat</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setAffichePhrase(false)}>
        <Text style={{ color: 'red', marginTop: 10 }}>Effacer</Text>
      </TouchableOpacity>

      {affichePhrase && (<Text style={{ fontSize: 20, color: 'blue' }}>{faireCalcul()}</Text>)}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
