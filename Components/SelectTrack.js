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

const CustomComponent = () => {
  return (
    <View style={styles.container}>
        {/*<CodeOverlay />*/}
        <Text style={styles.titleText}>Añadir pista de</Text>
        <View style={styles.gridContainer}>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.button}>
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
            <TouchableOpacity style={styles.button}>
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
            <TouchableOpacity style={styles.button}>
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
            <TouchableOpacity style={styles.button}>
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
    paddingVertical: 40,
  },
  gridContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  button: {
    width: 150,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
   // borderRadius: 10,
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute",
    top: "10%",   // Ajustado para centrar verticalmente
    left: "10%",  // Ajustado para centrar horizontalmente
    width: "80%",
    height: "80%",
  },
  centeredForegroundImage: {
    marginTop: 20,
    width: "30%",
    height: "30%",

  },
  labelText: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});

export default CustomComponent;
