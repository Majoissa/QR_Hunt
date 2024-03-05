import React from "react";
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text } from "react-native";

const HomeScreen = () => {
  return (
    <ImageBackground
      source={require('../images/Home_Background_Animation00.png')}
      style={styles.container}
    >
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <ImageBackground
            source={require('../images/Btn_Jugar.png')}
            style={styles.buttonBackground}
          >
            <Text style={styles.buttonText}>Jugar</Text>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <ImageBackground
            source={require('../images/Btn_CrearPartida.png')}
            style={styles.buttonBackground}
          >
            <Text style={styles.buttonText}>Crear Partida</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    marginTop: 380, 
  },
  button: {
    width: 200, 
    height: 60, 
    borderRadius: 15, 
    overflow: 'hidden',
    marginBottom: 20, 
  },
  buttonBackground: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24, 
    fontWeight: 'bold',
  },
});

export default HomeScreen;
