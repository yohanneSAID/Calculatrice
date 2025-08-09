import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Styles } from '../styles/GlobalStyles';
import { ThemeContext } from '../context/ThemeContext';
import { FeFlood } from 'react-native-svg';

export default function AffichageCalcul({ calcul, resultat }) {

    const theme = useContext(ThemeContext);

    const blocCalculStyle = theme === 'sombre' ? Styles.calculSombre : Styles.calculClair;
    const cadreStyle = theme === 'sombre' ? Styles.cadreSombre : Styles.cadreClair;
    const texteCalculStyle = theme === 'sombre' ? Styles.AffichageCalculSombre : Styles.AffichageCalculClair;
    const texteResultatStyle = theme === 'sombre' ? Styles.resultatSombre : Styles.resultatClair;

    return (
        <View style={blocCalculStyle}>
            <View style={cadreStyle}>
                <Text
                    style={texteCalculStyle}
                    numberOfLines={1}
                    adjustsFontSizeToFit={true}
                    minimumFontScale={0.5}
                >
                    {calcul}
                </Text>

                <Text
                    style={texteResultatStyle}
                    numberOfLines={1}
                    adjustsFontSizeToFit={true}
                    minimumFontScale={0.5}
                >
                    {resultat}
                </Text>

            </View>
        </View>
    );
}

