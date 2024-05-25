import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import Navbar from "../Components/Navbar";
import MapView, { Marker } from "react-native-maps";
import UbicationSelector from "../Components/UbicationSelector";
import TitleInput from "../Components/TitleInput";
import DescriptionInput from "../Components/DescriptionInput";
import SaveClueButton from "../Components/SaveClueButton";
import SaveBtn from "../images/Geo_Button.png";
import CodeOverlay from "../Components/CodeOverlay";
import ActiveCodeOverlay from "../Components/ActiveCodeOverlay";
const AddGeolocalization = () => {
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
      source={require("../images/Background_Hint_Geo.png")}
      style={styles.background}
    >
      <Navbar title="Pista de geolocalización" />
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.container2}>
            <UbicationSelector />
            <TitleInput />
            <DescriptionInput />
          </View>
          <View style={{ paddingBottom: 20 }}>
            <CodeOverlay
              onEditPress={handlePress}
              code={code}
              onCodeChange={handleCodeChange}
              colors={{
                panelBackground: "#57333b",
                qrButton: "#57333b",
              }}
            />
          </View>
        </ScrollView>

        {isOverlayVisible && (
          <View style={styles.overlay}>
            <ActiveCodeOverlay
              code={code}
              onCodeChange={handleCodeChange}
              onAccept={handleAccept}
            />
          </View>
        )}
      </View>
      <SaveClueButton imgSrc={SaveBtn} text="AÑADIR PISTA" />
    </ImageBackground>
  );
};

const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 125,
  },
  container2: {
    paddingHorizontal: 20,
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 20,
  },
  map: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
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

export default AddGeolocalization;
