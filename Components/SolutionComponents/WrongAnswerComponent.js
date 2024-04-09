import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const CorrectAnswerComponent = ({onPressNext }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, styles.correctAnswerText]}>
        La respuesta es...
      </Text>
      <Text style={[styles.text, styles.correctText]}>INCORRECTA!</Text>
      <TouchableOpacity style={styles.button} onPress={onPressNext}>
        <Image
          source={require('../../images/Button_Resolve_Text.png')}
          style={styles.buttonBackground}
          resizeMode="cover"
        />
        <Text style={styles.buttonText}>VOLVER A PROBAR</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 30,
  },
  correctAnswerText: {
    color: 'white',
  },
  correctText: {
    color: 'red',
    fontWeight: 'bold'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonBackground: {
    width: '70%',
    height: '140%',
    position: 'absolute',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    zIndex: 1,
  },
});

export default CorrectAnswerComponent;
