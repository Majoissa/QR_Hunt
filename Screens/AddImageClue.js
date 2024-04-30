// Importa los componentes necesarios de React y React Native
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define el componente AddImageClue
const AddImageClue = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ADD IMAGE CLUE SCREEN</Text>
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1, // Usa todo el espacio disponible
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
    backgroundColor: '#f0f0f0' // Un fondo gris claro
  },
  text: {
    fontSize: 20, // Tamaño de fuente grande
    fontWeight: 'bold' // Texto en negrita
  }
});

// Exporta el componente para que pueda ser usado en otros archivos
export default AddImageClue;
