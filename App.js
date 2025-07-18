import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
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
  let valeur = '2-10-2';
  let i = 0;
  let j = 0;
  let k = 0;
  let l = 0;
  let nombre1 = '';
  let nombre2 = '';
  let resultat = 0;

  let indicePremierPlus = 0;
  let indicePremierMoins = 0;
  let nombreOperation = 0;

  //détermination de l'indice du 1er signe '+', '-'
  for (i = 0; i < valeur.length; i++) {
    if (valeur[i] == '+') {
      indicePremierPlus = i;
      break;
    }
    else if (valeur[i] == '-') {
      indicePremierMoins = i;
      break;
    }
  }

  //determination du 1er nombre
  for (j = 0; j < indicePremierPlus; j++) {
    nombre1 = nombre1 + valeur[j];
  }
  return nombre1;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text> le résultat est {Calculatrice()} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#996DCF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
