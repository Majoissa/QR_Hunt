// Importa los componentes necesarios de React y React Native
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import Navbar from "../Components/Navbar";
import SaveClue from "../Components/SaveClueButton";
import SaveBtn from "../images/Btn_CrearPartida.png";
import CoverImgSelector from "../Components/CoverImgSelector";
import TitleInput from "../Components/TitleInput";
import decorateMapComponent from "react-native-maps/lib/decorateMapComponent";
import DescriptionInput from "../Components/DescriptionInput";
import CodeOverlay from "../Components/CodeOverlay";
import ActiveCodeOverlay from "../Components/ActiveCodeOverlay";

// Define el componente AddImageClue
const AddImageClue = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [code, setCode] = useState("ABC123...");

  const handlePress = () => {
    setIsOverlayVisible(true);
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleAccept = () => {
    setIsOverlayVisible(false);
  };

  return (
    <ImageBackground
      source={require("../images/Background_Hint_Image.png")}
      style={styles.backgroundImage}
    >
      <Navbar title="Crear Pista Imagen" />
      <View style={{ padding: 20, paddingBottom: 30, height: "80%" }}>
        <ScrollView>
          <CoverImgSelector />
          <TitleInput />
          <DescriptionInput />
          <View style={{ paddingBottom: 20 }}>
            <CodeOverlay
              onEditPress={handlePress}
              code={code}
              onCodeChange={handleCodeChange}
              colors={{
                panelBackground: "#003B2C",
                qrButton: "#3a7356",
              }}
            />
          </View>
        </ScrollView>
      </View>
      {isOverlayVisible && (
        <View style={styles.overlay}>
          <ActiveCodeOverlay
            code={code}
            onCodeChange={handleCodeChange}
            onAccept={handleAccept}
          />
        </View>
      )}

      <SaveClue imgSrc={SaveBtn} text="GUARDAR" />
    </ImageBackground>
  );
};

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1, // Usa todo el espacio disponible
    justifyContent: "center", // Centra el contenido verticalmente
    alignItems: "center", // Centra el contenido horizontalmente
    backgroundColor: "#f0f0f0", // Un fondo gris claro
  },
  text: {
    fontSize: 20, // Tamaño de fuente grande
    fontWeight: "bold", // Texto en negrita
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    //alignItems: 'center',
    //padding: 20,
  },
  overlay: {
    position: "absolute",
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "black",
    opacity: 0.7,
    left: 0,
    top: 0,
    zIndex: 2,
  },
});

// Exporta el componente para que pueda ser usado en otros archivos
export default AddImageClue;
