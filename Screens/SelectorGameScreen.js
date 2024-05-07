import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import GameComponentContainer from "../Components/GameComponentContainer";
import { getAllPartidas } from '../Components/DBManager';

const image = require("../images/Home_Background_Animation00.png");
const leaves = require("../images/FlorsButton.png");
const leavesRight = require("../images/FlorsExtreDevantButton.png");
const SelectorGameScreen = () => {
  const [partidas, setPartidas] = useState([]);

  useEffect(() => {
    cargarPartidas();
  }, []);

  const cargarPartidas = async () => {
    try {
      const partidasDB = await getAllPartidas();
      setPartidas(partidasDB);
    } catch (error) {
      console.error('Error al cargar las partidas:', error);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ opacity: 0.7 }}
      >
        <GameComponentContainer partidas={partidas} />
      </ImageBackground>
      <View pointerEvents="none">
        <Image source={leaves} style={styles.leaves} />
        <Image source={leavesRight} style={styles.leaves2} />
      </View>
    </View>
  );
};

const widthScreen = Dimensions.get("window").width;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  container: {
    flex: 1,
  },
  leaves: {
    width: widthScreen,
    height: 300,
    margin: "auto",
    position: "absolute",
    bottom: 0,
  },
  leaves2: {
    width: widthScreen,
    height: widthScreen,
    margin: "auto",
    position: "absolute",
    bottom: 0,
  },
});

export default SelectorGameScreen;
