import { useContext } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { ThemeContext } from '../context/ThemeContext';
import { Styles } from '../styles/GlobalStyles';


export default function Button({
    title,
    onPress,
    isOrange,
    isOrg,
    icon,
}) {
    const theme = useContext(ThemeContext);

    // Choix du style du bouton
    const buttonStyle = isOrange
        ? Styles.egalBtn
        : theme === 'sombre'
            ? Styles.buttonSombre
            : Styles.buttonClair;

    // Choix du style du texte
    const textStyle = [
        isOrange && Styles.egalText,
        isOrg && Styles.operatorText,
        !isOrange && !isOrg && (theme === 'sombre'
            ? Styles.buttonTextSombre
            : Styles.buttonTextClair),
    ];

    return (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {icon}
                {title !== '' && (
                    <Text style={textStyle}>{title}</Text>
                )}
            </View>
        </TouchableOpacity>
    );
}
