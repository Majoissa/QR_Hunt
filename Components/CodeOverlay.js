import {View, StyleSheet, Text, Image, TouchableOpacity, TextInput} from "react-native";
import Navbar from "./Navbar";
import {useNavigation} from "@react-navigation/native";
import {useState} from "react";
import SelectedQR from "../images/QR_Button.png";
import QRIcon from "../images/QR_Icon.png";

function CodeOverlay() {
    const navigation = useNavigation();
    const [getInputCode, setInputCode] = useState(false);
    const [code, setCode] = useState("ABC123...");
    const [selectedButton, setSelectedButton] = useState("code");
    const [qrIcon, setQrIcon] = useState(QRIcon);

    const codeEdit = () => {
        setInputCode(!getInputCode)
    };
    const handleCodeChange = (text) => {
        setCode(text);
    };
    const togglePanel = (button) => {
        setSelectedButton(button); // De lo contrario, selecciona el botón pulsado

        if (button === "qr")
            setQrIcon(SelectedQR);
        else
            setQrIcon(QRIcon);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.resolutionText}>Resolución de la pista por:</Text>
            <View style={styles.buttonGroup}>
                <TouchableOpacity style={selectedButton === "qr" ? styles.selectedButton :
                    styles.qrButton} onPress={() => getInputCode ? null :
                    (togglePanel("qr"))}>
                    <Image source={qrIcon} style={styles.qrIcon}></Image>
                </TouchableOpacity>
                <TouchableOpacity style={selectedButton === "code" ? styles.selectedButton :
                    styles.codeButton} onPress={() => getInputCode ? null :
                    (togglePanel("code"))}>
                    <Text style={selectedButton === "code" ? styles.codeSelectedText :
                        styles.codeText}>432</Text>
                </TouchableOpacity>
            </View>
            {/*<Navbar title="Crear Pista Imagen"/>*/}
            {getInputCode ? (
                <View style={styles.overlayTitle}>
                    <Text style={{fontWeight: "bold", fontSize: 35, color: "white"}}>Código de la pista</Text>
                    <Text style={{color: "#60986e", fontWeight: "bold", fontSize: 15}}>Introduce un código de
                        juego</Text>
                </View>
            ) : null}
            {selectedButton === "code" ? (
                <View style={getInputCode ? styles.panelAbsolute : styles.panel}>
                    <Text style={styles.text1}>Tu código:</Text>
                    <View style={styles.group}>
                        {getInputCode ? (
                            <TextInput
                                style={styles.text3}
                                value={code}
                                onChangeText={handleCodeChange}
                                numberOfLines={1}
                                ellipsizeMode="tail"
                                maxLength={6}
                                autoCapitalize="characters"
                            />
                        ) : (
                            <Text style={styles.text2} numberOfLines={1} ellipsizeMode="tail">
                                {code}
                            </Text>
                        )}
                        {!getInputCode ? (
                            <TouchableOpacity onPress={codeEdit}>
                                <Image source={require("../images/Edit_Icon.png")} style={styles.image}></Image>
                            </TouchableOpacity>
                        ) : null}
                    </View>
                </View>) : null}
            <View style={getInputCode ? styles.overlay : {display: "none"}}></View>
            {getInputCode ? (
                <TouchableOpacity style={styles.acceptButton} onPress={codeEdit}>
                    <Text style={{color: "white", fontSize: 30}}>ACEPTAR</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       // flex: 1,
        //justifyContent: 'flex-end',
        alignItems: 'center',
        height: '30%',
      //  backgroundColor: 'red',

    },
    panel: {
        backgroundColor: "#003B2C",
        width: '80%',
        alignSelf: 'center',
       // height: 125,
        borderRadius: 20,
        alignItems: 'center',
        top: 20,
      //  bottom: 200,
    },
    panelAbsolute: {
        backgroundColor: "#003B2C",
        width: '75%',
        alignSelf: 'center',
        height: 125,
        borderRadius: 25,
        alignItems: 'center',
      //  position: "absolute",
        top: 200,
    },
    text1: {
        color: "#ffffff",
        fontSize: 18,
        marginTop: 6,
    },
    text2: {
        color: "#ffffff",
        fontSize: 40,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        width: "75%",
    },
    text3: {
        color: "#ffffff",
        fontSize: 40,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        width: "100%",
        textAlign: "center",
    },
    group: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
       // marginTop: 2,
    },
    image: {
        height: 30,
        width: 30,
        margin: 15,
    },
    overlay: {
        flex: 1,
       // position: 'absolute',
        left: 0,
        top: 0,
        opacity: 0.7,
        backgroundColor: 'black',
        width: "100%",
        height: "100%",
        zIndex: -1,
    },
    overlayTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 100,
        position: "absolute",
    },
    acceptButton: {
        backgroundColor: "#ffb708",
        width: '65%',
        justifyContent: 'center',
        alignItems: 'center',
      //  position: "absolute",
        height: 55,
        top: 350,
        borderRadius: 25,
    },
    buttonGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 15,
        top: 7,

    },
    qrButton: {
        backgroundColor: "#3a7356",
        padding: 10,
        borderRadius: 10,
        opacity: 0.5,
    },
    qrIcon: {
        height: 60,
        width: 60,
        flex: 1, // Asegura que la imagen expanda
        resizeMode: 'contain',
    },
    codeButton: {
        backgroundColor: "#3a7356",
       // width: 145,
       // height: 120,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        opacity: 0.5,
    },
    codeText: {
        fontSize: 40,
        color: "white",
        padding: 10,
    },
    codeSelectedText: {
        fontSize: 40,
        color: "#ffb708",
    },
    selectedButton: {
        backgroundColor: "white",
        padding: 10,
        borderRadius: 10,
        opacity: 1,
    },
    resolutionText: {
        fontSize: 18,
        alignSelf: "flex-start",
        fontWeight: "bold",
        color: "white",
    },
})

export default CodeOverlay;