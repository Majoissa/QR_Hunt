//texto de titulo de la pista 
//imagen
//texto descriptivo

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ClueCardImage = ({ title, description, imageSource }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    cardContainer: {
      padding: 15,
      margin: 10,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowRadius: 5,
      shadowOffset: { width: 0, height: 2 },
      elevation: 3,
      backgroundColor: 'transparent', 
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      textAlign: 'center', 
    },
    image: {
      width: '100%',
      height: 350, 
      borderRadius: 10,
      marginBottom: 10,
    },
    description: {
      fontSize: 16,
      color: '#333',
    },
  });
  
  export default ClueCardImage;