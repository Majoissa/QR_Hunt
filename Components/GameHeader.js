import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const GameHeader = ({ imageUrl }) => {
  return (
    <ImageBackground 
      source={{ uri: imageUrl }} 
      style={styles.headerImage}
    >
      {/* Ahora este componente es solo para la imagen de fondo */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'transparent', // Fondo transparente
  },
  

  headerImage: {
    height: 250, // Ajusta esta altura según tus necesidades
    borderBottomRightRadius: 25, // Redondea los bordes inferiores
    borderBottomLeftRadius: 25, // Redondea los bordes inferiores
    overflow: 'hidden', // Esto es necesario para que ImageBackground respete los bordes redondeados
    zIndex: 1, // Menor zIndex para estar detrás del contenido
  },

  // Eliminados los estilos relacionados al título
});

export default GameHeader;
