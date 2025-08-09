import React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ThemeContext } from './sources/context/ThemeContext';
import { mesCouleurs } from './sources/styles/Couleurs';
import Button from './sources/components/Button';
import Clavier from './sources/components/Clavier';
import AffichageCalcul from './sources/components/AffichageCalcul';
import Calculatrice from './sources/utils/calculatrice';

export default function App() {
  const [theme, setTheme] = useState('sombre');
  const [calculEnCours, setCalculEnCours] = useState('');
  const [resultatFinal, setResultatFinal] = useState('');

  return (
    <ThemeContext.Provider value={theme}>

      <View style={theme === 'sombre' ? styles.container : [styles.container, { backgroundColor: '#e4e4e4ff' }]}>
        {/* Écran d'affichage */}

        <AffichageCalcul calcul={calculEnCours} resultat={resultatFinal} />


        <Switch
          value={theme === 'sombre'}
          onValueChange={() => setTheme(theme === 'sombre' ? 'clair' : 'sombre')}
        />



        <Clavier
          onPress={(val) => {
            if (val === 'AC') {
              setCalculEnCours('');
              setResultatFinal('');
            } else if (val === 'DEL') {
              setCalculEnCours((prev) => prev.slice(0, -1));
            } else if (val === '=') {
              try {
                const result = Calculatrice(calculEnCours); // ← ici tu utilises ton moteur perso
                setResultatFinal(String(result));
              } catch (error) {
                setResultatFinal('Erreur');
              }
            } else {
              setCalculEnCours((prev) => prev + val);
            }
          }}
        />



      </View>
    </ThemeContext.Provider >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mesCouleurs.sombre, // Violet-gris
    padding: 15,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    top: 50,
  },


  lastRowsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumn: {
    flex: 1,
  },

});

