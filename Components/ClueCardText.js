import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClueCardText = ({ title, description }) => {
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 15,
    margin: 10,
    marginTop: 0,
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
    marginBottom: 50,
    textAlign: 'center', 
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left', 
  },
});

export default ClueCardText;
