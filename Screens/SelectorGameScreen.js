import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import GameComponent from "../Components/GameComponent";

const image = require("../images/Home_Background_Animation00.png");
const leaves = require("../images/FlorsButton.png");
const leavesRight = require("../images/FlorsExtreDevantButton.png");
const SelectorGameScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
        imageStyle={{ opacity: 0.5 }}
      >
        <ScrollView>
          <GameComponent />
          <GameComponent />
          <GameComponent />
          <GameComponent />
        </ScrollView>
      </ImageBackground>
      <Image source={leaves} style={styles.leaves} />
      <Image source={leavesRight} style={styles.leaves} />
    </View>
  );
};

const widthScreen = Dimensions.get("window").width;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
  },
  container: {
    flex: 1,
  },
  leaves: {
    width: widthScreen,
    height: widthScreen,
    margin: "auto",
    position: "absolute",
    bottom: 0,
  },
});

export default SelectorGameScreen;
