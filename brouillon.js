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

}
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
*/

/* ********************************************|| PLUS OU MOINS ||***************************************** 
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



























import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from './sources/context/themeContext'; // also celle là
import { mesCouleurs } from './sources/styles/Couleurs'; // il FAUT Importer les couleurs!!!!! 

const Calculator = () => {
const [theme, setTheme] = useState('sombre');
// Utilisation du contexte de thème 
return (
    <ThemeContext.Provider value={theme}>
        <View style={theme === 'sombre' ? styles.container : [styles.container, { backgroundColor: theme === 'clair' }]}>
            <Switch
                value={theme === 'sombre'}
                onValueChange={() => setTheme(theme === 'sombre' ? 'clair' : 'sombre')}

            />*/
{/* Écran d'affichage 
                <View style={styles.calcul}>
                    <View style={styles.cadre}>
                        <Text style={styles.AffichageCalcul}>0</Text>*/}
{/* <Text style={styles.resultat}>0</Text>
                    </View>
                </View>*/}

{/* *************************|| Première ligne : AC, /, +, suppression ||***********************
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>AC</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={[styles.buttonText, styles.operatorText]}>/</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={[styles.buttonText, styles.operatorText]}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Feather name="delete" color="#FF9500" size={28} />
                    </TouchableOpacity>
                </View>*/}

{/* ***************************|| Deuxième ligne : 7,8,9, - ||*************************************
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>9</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={[styles.buttonText, styles.operatorText]}>-</Text>
                    </TouchableOpacity>
                </View>*/}

{/**************************** *||  Troisième ligne : 4,5,6, × ||**********************
                <View style={styles.row}>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={styles.buttonText}>6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => { }}>
                        <Text style={[styles.buttonText, styles.operatorText]}>×</Text>
                    </TouchableOpacity>
                </View>*/}

{/* Conteneur pour les deux dernières lignes avec bouton égal vertical 
                <View style={styles.lastRowsContainer}>*/}

{/** *************** || Colonne gauche avec les boutons 1,2,3 et %,0,.* ||****************************
                    <View style={styles.leftColumn}>*/}
{/* Ligne 1,2,3 
                        <View style={styles.row}>
                            <TouchableOpacity style={styles.button} onPress={() => { 1 }}>
                                <Text style={styles.buttonText}>1</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => { 2 }}>
                                <Text style={styles.buttonText}>2</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => { 3 }}>
                                <Text style={styles.buttonText}>3</Text>
                            </TouchableOpacity>
                        </View>*/}

{/* Ligne %,0,.
                        <View style={styles.row}>
                            <TouchableOpacity style={styles.button} onPress={() => { }}>
                                <Text style={styles.buttonText}>%</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => { }}>
                                <Text style={styles.buttonText}>0</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => { }}>
                                <Text style={styles.buttonText}>.</Text>
                            </TouchableOpacity>
                        </View>
                    </View>*/}

{/* Bouton égal vertical à droite 
                    <View style={styles.row}>
                        <TouchableOpacity style={styles.equalButton} onPress={() => { }}>
                            <Text style={styles.equalText}>=</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ThemeContext.Provider >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: mesCouleurs.sombreBack, // Violet-gris
        padding: 15,
    },
    calcul: {
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
        marginBottom: 20,
    },
    AffichageCalcul: {
        color: 'white',
        fontSize: 50,
    },
    resultat: {
        color: '#FF9500',
        fontSize: 50,
    },
    //********************************** ||  CADRE  || **************************************** /
    cadre: {
        top: 17,
        position: 'absolute',
        width: '114%',
        height: '130%',
        backgroundColor: '#353542ff', // Couleur du cadre
        borderRadius: 20, // Coins arrondis
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 10,

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
        borderWidth: 1, // Bordure fine
        borderColor: '#272731ff', // Couleur de la bordure
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        top: 50,
    },*/}

/*******************||  BOUTON CALCULATRICE||**********************

button: {

    width: 70,
    height: 67,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#505063', // Couleur des boutons
    borderRadius: 20, // Coins arrondis
    borderWidth: 1.5, // Bordure fine
    borderColor: '#2e2e3bff', // Couleur de la bordure

    // Effet d'ombre plus prononcé
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 10,
},
buttonText: {
    color: '#E0E0E0', // Texte gris clair
    fontSize: 28,
    fontWeight: '500',
},
operatorText: {
    color: '#FF9500', // Orange pour les opérateurs
},
lastRowsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
leftColumn: {
    flex: 1,
},
equalButton: {
    width: 67,
    height: 146, // Hauteur pour deux lignes (75*2 + 15 de marge)
    backgroundColor: '#FF9500', // Orange
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginLeft: 17,
    // Ombre plus forte
    shadowColor: 'purple',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 12,
    borderWidth: 1,

    borderWidth: 1.5, // Bordure fine
    borderColor: '#272730ff', // Couleur de la bordure
    // marginTop: 22,

},
equalText: {
    color: 'black',
    fontSize: 35,
    fontWeight: 'bold',
},
});

export default Calculator;*/