import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ClueHeaderText = ({ currentStep }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pista {currentStep} de 4:</Text> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 65,
  },
  text: {
    fontSize: 30, 
    color: '#FFD700', 
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ClueHeaderText;
