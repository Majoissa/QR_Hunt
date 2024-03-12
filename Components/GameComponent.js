import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Dimensions } from "react-native";

const tesoro = require("../images/Extra_Image.png");

const GameComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={tesoro} style={styles.image} />
      <View style={styles.tresure}>
        <Text style={styles.title}>El tesoro del jardín</Text>
        <Text style={styles.paragraph}>
          Parece que alguien ha escondido un valioso tesoro en algun lugar de
          este jardín...
        </Text>
      </View>
    </View>
  );
};

const windowWith = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#003b2c",
    display: "flex",
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 20,
  },
  image: {
    width: 150,
    height: 150,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  title: {
    color: "#ffb500",
    fontSize: 18,
    fontWeight: "bold",
    margin: 15,
  },
  paragraph: {
    color: "white",
    marginStart: 15,
    fontWeight: "bold",
    width: windowWith * 0.5,
  },
});
export default GameComponent;
