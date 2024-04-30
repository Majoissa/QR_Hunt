import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const GameHeader = ({ imageUrl }) => {
  return (
    <ImageBackground 
      source={{ uri: imageUrl }} 
      style={styles.headerImage}
    >
    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    position:'relative',
    height: 350, // Ajusta esta altura según tus necesidades
    overflow: 'hidden', // Esto es necesario para que ImageBackground respete los bordes redondeados
  },
});

export default GameHeader;