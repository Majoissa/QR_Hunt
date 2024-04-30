import React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const image = require("../images/no_games.png");

const NoGameComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>
        Oh, you haven't created any games yet. Press the button to start!
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Image
          source={require("../images/Btn_Jugar.png")}
          style={styles.buttonBackground}
        />
        <Text style={styles.buttonText}>Create game</Text>
      </TouchableOpacity>
    </View>
  );
};
const widthScreen = Dimensions.get("window").width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: 40,
    width: 300,
    height: 360,
  },
  text: {
    color: "black",
    marginStart: 5,
    fontWeight: "bold",
    fontSize: 15,
    width: widthScreen * 0.8,
    textAlign: "center",
    marginTop: 40,
  },
  button: {
    marginTop: 20,
    width: 200,
    height: 40,
    borderRadius: 75,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 24,
    position: "absolute",
  },
});

export default NoGameComponent;
