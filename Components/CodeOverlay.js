import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import Navbar from "./Navbar";
import {useNavigation} from "@react-navigation/native";

function CodeOverlay() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Navbar title="Crear Pista Imagen" />
            <Text>Código de la pista</Text>
            <Text>Introduce un código de juego</Text>
            <View style={styles.panel}>
                <Text style={styles.text1}>Tu código:</Text>
                <View style={styles.group}>
                    <Text style={styles.text2} numberOfLines={1} ellipsizeMode={"tail"}>ABC12...</Text>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                        <Image source={require("../images/Edit_Icon.png")} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    panel: {
        backgroundColor: "#003B2C",
        width: '75%',
        alignSelf: 'center',
        height: '15%',
        borderRadius: 25,
        alignItems: 'center',
    },
    text1: {
        color: "#ffffff",
        fontSize: 18,
        marginTop: 6,
    },
    text2: {
        color: "#ffffff",
        fontSize: 55,
        fontWeight: 'bold',
        paddingHorizontal: 15,
    },
    group: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
        marginTop: 2,
    },
    image: {
        height: 40,
        width: 40,
    },
})

export default CodeOverlay;