// Importa los componentes necesarios de React y React Native
import React from 'react';
import { View, StyleSheet } from 'react-native';
import CodeOverlay from '../Components/CodeOverlay'; // Asegúrate de que la ruta de importación sea correcta

// Define el componente CodeOverlayScreen
const CodeOverlayScreen = () => {
  return (
    <View style={styles.container}>
      <CodeOverlay />
    </View>
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1, // Usa todo el espacio disponible
    //justifyContent: 'center', // Centra el contenido verticalmente
    //alignItems: 'center', // Centra el contenido horizontalmente
    backgroundColor: '#f0f0f0' // Un fondo gris claro
  }
});

// Exporta el componente para que pueda ser usado en otros archivos
export default CodeOverlayScreen;
