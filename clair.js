<View style={styles.calculSombre}>
          <View style={styles.cadre}>
            <Text style={styles.AffichageCalcul}>0</Text>
            {/* <Text style={styles.resultat}>0</Text>*/}
          </View>

        </View>
        <Switch
          value={theme === 'sombre'}
          onValueChange={() => setTheme(theme === 'sombre' ? 'clair' : 'sombre')}
        />
        <Button isOrange title='14' onPress={() => { alert('hello') }} />

{/* *************************|| Première ligne : AC, /, +, suppression ||************************/ }
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
        <Feather name="delete" color="#d87e00ff" size={28} />
    </TouchableOpacity>
</View>

{/* ***************************|| Deuxième ligne : 7,8,9, - ||**************************************/ }
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
        <Text style={[styles.buttonTextSombre, styles.operatorText]}>-</Text>
    </TouchableOpacity>
</View>

{/**************************** *||  Troisième ligne : 4,5,6, × ||***********************/ }
<View style={styles.row}>
    <TouchableOpacity style={styles.buttonSombre} onPress={() => { }}>
        <Text style={styles.buttonText}>4</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonSombre} onPress={() => { }}>
        <Text style={styles.buttonText}>5</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonSombre} onPress={() => { }}>
        <Text style={styles.buttonText}>6</Text>
    </TouchableOpacity>
    <TouchableOpacity style={styles.buttonSombre} onPress={() => { }}>
        <Text style={[styles.buttonText, styles.operatorText]}>×</Text>
    </TouchableOpacity>
</View>

{/* Conteneur pour les deux dernières lignes avec bouton égal vertical */ }
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
        <TouchableOpacity style={styles.egalBtn} onPress={() => { }}>
            <Text style={styles.egalText}>=</Text>
        </TouchableOpacity>
    </View>
</View>
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F8FA', // Fond très clair et doux
        padding: 15,
    },
    calculClair: {
        height: 150,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 20,
        marginBottom: 20,
    },
    AffichageCalculClair: {
        color: '#2B2B2B', // Texte sombre pour contraste
        fontSize: 50,
    },
    resultatClair: {
        color: '#d87e00ff',
        fontSize: 50,
    },
    cadreClair: {
        top: 17,
        position: 'absolute',
        width: '114%',
        height: '130%',
        backgroundColor: '#FFFFFF', // Cadre blanc lumineux
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 10,

        shadowColor: '#AAA',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 5,
        elevation: 6,
        borderWidth: 1,
        borderColor: '#E2E2E2',
    },

    buttonClair: {
        width: 70,
        height: 67,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EDEEF2', // Fond bouton clair
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: '#D6D8E0',
        shadowColor: '#CCC',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 10,
    },
    buttonTextClair: {
        color: '#3C3C3C', // Texte foncé
        fontSize: 28,
        fontWeight: '500',
    },
    operatorTextClair: {
        color: '#d87e00ff', // Toujours orange
    },

    egalBtn: {
        width: 67,
        height: 146,
        backgroundColor: '#FF9500', // Identique à ton design 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginLeft: 17,
        shadowColor: 'purple',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.5,
        shadowRadius: 6,
        elevation: 12,
        borderWidth: 1.5,

    },
    egalText: {
        color: 'black',
        fontSize: 35,
        fontWeight: 'bold',
    },
});
