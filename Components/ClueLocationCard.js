import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ClueLocationCard = ({ title, imageSource }) => {
  return (
    <View style={styles.cardContainer}>
    <Text style={styles.title}>{title}</Text>
    <Image source={imageSource} style={styles.image} />
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
    height: 500, 
    borderRadius: 10,
    marginTop:20,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
});

export default ClueLocationCard;
