import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground, StyleSheet } from 'react-native';
import { Video } from "expo-av";

const MissionCompletedComponent = () => {
  return (
    <ImageBackground
      source={require('../images/Home_Background_Animation00.png')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={[styles.text, styles.missionCompletedText]}>
          MISIÓN
        </Text>
        <Text style={[styles.text, styles.missionCompletedText]}>
          COMPLETADA!
        </Text>
        <Text style={[styles.text, styles.descriptionText]}>
          ¡Muy bien aventurero! Encontraste el tesoro escondido!
        </Text>
        <Video
          source={require("../videos/YouWin.mp4")}
          style={styles.videoBackground}
          resizeMode="cover"
          shouldPlay
        />
        <TouchableOpacity style={styles.button}>
        <Image
            source={require("../images/Button_Resolve_Text.png")}
            style={styles.buttonBackground}
          />
          <Text style={styles.buttonText}>Crear Partida</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
  missionCompletedText: {
    fontSize: 36,
    color: 'orange',
  },
  descriptionText: {
    fontSize: 18,
    color: 'white',
  },
  videoBackground: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
  buttonBackground: {
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

export default MissionCompletedComponent;
