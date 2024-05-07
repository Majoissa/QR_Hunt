import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Dimensions } from "react-native";

const tesoro = require("../images/Extra_Image.png");

const GameComponent = ({ partida, isOneUser }) => {
  const { Title, Description } = partida;
  return (
    <View style={styles.container}>
      <Image source={tesoro} style={styles.image} />
      <View style={styles.tresure}>
        <Text style={styles.title}>{Title}</Text>
        <Text style={styles.paragraph}>
        {Description}
        </Text>
        {isOneUser ? (
          <View style={styles.vision}>
            <Image
              style={styles.img}
              source={require("../images/Jugador1.png")}
            />
            <Text style={styles.p}>Solo yo</Text>
          </View>
        ) : (
          <View style={styles.vision}>
            <Image
              style={styles.img2}
              source={require("../images/Jugador2.png")}
            />
            <Text style={styles.p}>Público</Text>
          </View>
        )}
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
    width: windowWith * 0.4,
  },

  vision: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 10,
    marginStart: 85,
  },
  p: {
    color: "white",
    marginStart: 5,
    fontWeight: "bold",
    fontSize: 15,
    width: windowWith * 0.4,
  },
  img: {
    width: 35,
    height: 15,
    right: -17,
  },
  img2: {
    width: 35,
    height: 15,
  },
});
export default GameComponent;
