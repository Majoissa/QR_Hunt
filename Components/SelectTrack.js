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
      <ScrollView>
        {/*<CodeOverlay />*/}
        <Text style={styles.titleText}>Añadir pista de</Text>
        <View style={styles.gridContainer}>
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("../images/Image_Button.png")}
                style={styles.backgroundImage}
              />
              <Image
                source={require("../images/Image_Icon.png")}
                style={styles.centeredForegroundImage}
                resizeMode="contain"
              />
              <Text style={styles.labelText}>Imagen</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("../images/Text_Button.png")}
                style={styles.backgroundImage}
              />
              <Image
                source={require("../images/icon_text.png")}
                style={styles.centeredForegroundImage}
                resizeMode="contain"
              />
              <Text style={styles.labelText}>Texto</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.verticalSeparator} />
          <View style={styles.rowContainer}>
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("../images/Mic_Button.png")}
                style={styles.backgroundImage}
              />
              <Image
                source={require("../images/icon_audio.png")}
                style={styles.centeredForegroundImage}
                resizeMode="contain"
              />
              <Text style={styles.labelText}>Audio</Text>
            </TouchableOpacity>
            <View style={styles.separator} />
            <TouchableOpacity style={styles.button}>
              <Image
                source={require("../images/Geo_Button.png")}
                style={styles.backgroundImage}
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 40,
  },
  gridContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  verticalSeparator: {
    height: 20,
  },
  separator: {
    width: 20,
  },
  button: {
    width: 150,
    height: 120,
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  centeredForegroundImage: {
    marginTop: 20,
    width: "40%",
    height: "40%",
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
    marginBottom: 10,
  },
});

export default CustomComponent;
