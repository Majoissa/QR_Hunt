import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
} from "react-native";
import CodeOverlay from "./CodeOverlay";
import { useNavigation } from "@react-navigation/native";

const CustomComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/*<CodeOverlay />*/}
      <Text style={styles.titleText}>Añadir pista de</Text>
      <View style={styles.gridContainer}>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AddImageClue")}
          >
            <Image
              source={require("../images/Image_Button.png")}
              style={styles.backgroundImage}
              resizeMode="contain"
            />
            <Image
              source={require("../images/Image_Icon.png")}
              style={styles.centeredForegroundImage}
              resizeMode="contain"
            />
            <Text style={styles.labelText}>Imagen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AddTextClue")}
          >
            <Image
              source={require("../images/Text_Button.png")}
              style={styles.backgroundImage}
              resizeMode="contain"
            />
            <Image
              source={require("../images/icon_text.png")}
              style={styles.centeredForegroundImage}
              resizeMode="contain"
            />
            <Text style={styles.labelText}>Texto</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AddAudioClue")}
          >
            <Image
              source={require("../images/Mic_Button.png")}
              style={styles.backgroundImage}
              resizeMode="contain"
            />
            <Image
              source={require("../images/icon_audio.png")}
              style={styles.centeredForegroundImage}
              resizeMode="contain"
            />
            <Text style={styles.labelText}>Audio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("AddGeolocalization")}
          >
            <Image
              source={require("../images/Geo_Button.png")}
              style={styles.backgroundImage}
              resizeMode="contain"
            />
            <Image
              source={require("../images/icon_geo.png")}
              style={styles.centeredForegroundImage}
              resizeMode="contain"
            />
            <Text style={styles.labelText}>Geolocalizacion</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
  },
  gridContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: 160,
    height: 130,
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute",
    top: "10%", // Ajustado para centrar verticalmente
    left: "10%", // Ajustado para centrar horizontalmente
    width: "80%",
    height: "80%",
  },
  centeredForegroundImage: {
    width: "30%",
    height: "30%",
  },
  labelText: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
});

export default CustomComponent;
