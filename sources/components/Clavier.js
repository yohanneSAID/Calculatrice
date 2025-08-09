import * as React from "react";
import Button from "./Button";
import { View } from "react-native";
import { Styles } from "../styles/GlobalStyles";
import { Feather } from "@expo/vector-icons";

export default function Clavier({ onPress }) {
    return (
        <>
            <View style={Styles.row}>
                <Button title="AC" onPress={() => onPress('AC')} />
                <Button isOrg title="/" onPress={() => onPress('/')} />
                <Button isOrg title="+" onPress={() => onPress('+')} />
                <Button
                    isOrg
                    title=""
                    onPress={() => onPress('DEL')}
                    icon={<Feather name="delete" size={28} color="#d87e00ff" />}
                />
            </View>
            <View style={Styles.row}>
                <Button title="7" onPress={() => onPress('7')} />
                <Button title="8" onPress={() => onPress('8')} />
                <Button title="9" onPress={() => onPress('9')} />
                <Button isOrg title="-" onPress={() => onPress('-')} />
            </View>
            <View style={Styles.row}>
                <Button title="4" onPress={() => onPress('4')} />
                <Button title="5" onPress={() => onPress('5')} />
                <Button title="6" onPress={() => onPress('6')} />
                <Button isOrg title="*" onPress={() => onPress('*')} />
            </View>
            <View style={Styles.lastRowsContainer}>
                <View style={Styles.leftColumn}>
                    <View style={Styles.subRow}>
                        <Button title="1" onPress={() => onPress('1')} />
                        <Button title="2" onPress={() => onPress('2')} />
                        <Button title="3" onPress={() => onPress('3')} />
                    </View>

                    <View style={Styles.subRow}>
                        <Button title="%" onPress={() => onPress('%')} />
                        <Button title="0" onPress={() => onPress('0')} />
                        <Button title="." onPress={() => onPress('.')} />
                    </View>

                </View>

                <View style={Styles.row}>
                    <Button isOrange title="=" onPress={() => onPress('=')} />
                </View>
            </View>




        </>


    )
}