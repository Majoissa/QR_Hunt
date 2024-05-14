import {View, StyleSheet, Text, Image, TouchableOpacity, TextInput, Dimensions} from "react-native";
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
                           <TouchableOpacity onPress={() => setInputCode(true)}> 
                                <Image source={require("../images/Edit_Icon.png")} style={styles.image}></Image>
                            </TouchableOpacity>
                        ) : null}
                    </View>
                </View>) : null}
            <View style={getInputCode ? styles.overlay : {display: "none"}}></View>
            {getInputCode ? (
                <TouchableOpacity style={styles.acceptButton} onPress={codeEdit}>
                    <Text style={{color: "white", fontSize: 25, fontWeight: 'bold'}}>ACEPTAR</Text>
                </TouchableOpacity>
            ) : null}
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        alignSelf: 'center',
        borderRadius: 20,
        padding: 5,
        alignItems: 'center',
        zIndex: 99999,
        top: -350,
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
        position: 'absolute',
        left: 0,
        top: -500,
        opacity: 0.7,
        backgroundColor: 'black',
        width: "400%",
        height: "600%",
        zIndex: 2, // Un zIndex menor que los elementos que deben ir encima
    },
    overlayTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        top: -300,
        position: "absolute",
        zIndex: 9999,
    },
    acceptButton: {
        backgroundColor: "#ffb708",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        padding: 8,
        paddingHorizontal: 40,
        zIndex: 99999,
        top: -300,
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
        height: 105,
        width: 105,
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
        padding: 40,
    },
    codeSelectedText: {
        fontSize: 40,
        color: "#ffb708",
        padding: 25,
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