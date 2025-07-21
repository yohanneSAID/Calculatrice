import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Calculator = () => {
  return (
    <View style={styles.container}>
      {/* Écran d'affichage */}
      <View style={styles.calcul}>
        <View style={styles.cadre}>
          <Text style={styles.AffichageCalcul}>0</Text>
          {/* <Text style={styles.resultat}>0</Text>*/}
        </View>
      </View>
      {/* ********************** || LIGNES DE SÉPARATION || ********************** */}
      <View style={styles.ligneFine} />

      {/* *************************|| Première ligne : AC, /, +, suppression ||************************/}
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
      </View>

      {/* ***************************|| Deuxième ligne : 7,8,9, - ||**************************************/}
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
      </View>

      {/**************************** *||  Troisième ligne : 4,5,6, × ||***********************/}
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
      </View>

      {/* Conteneur pour les deux dernières lignes avec bouton égal vertical */}
      <View style={styles.lastRowsContainer}>

        {/** *************** || Colonne gauche avec les boutons 1,2,3 et %,0,.* ||*****************************/}
        <View style={styles.leftColumn}>
          {/* Ligne 1,2,3 */}
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
          </View>

          {/* Ligne %,0,.*/}
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
        </View>

        {/* Bouton égal vertical à droite */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.equalButton} onPress={() => { }}>
            <Text style={styles.equalText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3A3A4A', // Violet-gris
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
    top: 15,
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
    borderWidth: 1.5, // Bordure fine
    borderColor: '#272730ff', // Couleur de la bordure
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    top: 50,
  },

  /*******************||  LIGNE  FINE ||********************** */
  ligneFine: {
    height: 2,
    backgroundColor: '#272730ff',
    borderColor: '#272730ff', // Couleur de la bordure
    width: '100%',
    top: 45,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    alignSelf: 'center',
  },



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

export default Calculator;