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
    height: 350, 
    overflow: 'hidden',
  },
});

export default GameHeader;