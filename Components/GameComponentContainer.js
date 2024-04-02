import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import GameComponent from "./GameComponent";
import { useNavigation } from "@react-navigation/core";

const GameComponentContainer = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.outerContainer}>
      <View style={styles.background}></View>
      <View style={styles.heading}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../images/FletxaNegra.png")}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>My Games</Text>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <GameComponent />
        <GameComponent />
        <GameComponent />
        <GameComponent />
      </ScrollView>
    </View>
  );
};

const widthScreen = Dimensions.get("window").width;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    margin: 15,
    marginTop: 40,
    backgroundColor: "transparent",
  },
  container: {
    flex: 1,
    marginTop: 15,
  },
  background: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    opacity: 0.7,
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
  },
  heading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomColor: "#BC8E1D",
    borderBottomWidth: 6,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: "100%",
  },
  backArrow: {
    width: 25,
    height: 18,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
  },
  titleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameComponentContainer;
