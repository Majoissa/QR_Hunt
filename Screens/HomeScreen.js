import React from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { Video } from "expo-av";
import { useNavigation } from "@react-navigation/core";

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Video
        source={require("../videos/QRHunt.mp4")}
        style={styles.videoBackground}
        resizeMode="cover"
        shouldPlay
        isLooping
      />
      <TouchableOpacity style={styles.settingsButton}>
        <Image
          source={require("../images/Button_Settings.png")}
          style={styles.settingsButtonImage}
        />
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        <Text style={styles.welcomeText}>Bienvenido a...</Text>
        <Image
          source={require("../images/QR_Logo_WithoutVegetation.png")}
          style={styles.logoImage}
        />
        <Text style={styles.descriptionText}>
          ¡Una búsqueda del tesoro interactiva!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("MyGames")}
        >
          <Image
            source={require("../images/Btn_Jugar.png")}
            style={styles.buttonBackground}
          />
          <Text style={styles.buttonText}>Jugar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Overlay")}>
          <Image
            source={require("../images/Btn_CrearPartida.png")}
            style={styles.buttonBackground}
          />
          <Text style={styles.buttonText}>Crear Partida</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  videoBackground: {
    ...StyleSheet.absoluteFillObject,
  },
  settingsButton: {
    position: "absolute",
    top: -5,
    right: -5,
    width: 100,
    height: 100,
    zIndex: 1,
  },
  settingsButtonImage: {
    width: "100%",
    height: "100%",
  },
  centerContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 200,
    marginBottom: -140,
  },
  logoImage: {
    width: 350,
    height: 350,
    resizeMode: "contain",
    marginBottom: 20,
    marginTop: 60,
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: -90,
    marginBottom: 150,
  },
  buttonContainer: {
    alignItems: "center",
    marginBottom: 100,
  },
  button: {
    width: 250,
    height: 70,
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
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    position: "absolute",
  },
});

export default HomeScreen;
