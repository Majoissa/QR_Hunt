import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ClueHeader from '../Components/ClueHeader'; 
import FooterButtonSolve from '../Components/FootButtonSolve'; 
const ClueSoundScreen = ({ currentStep }) => {
  return (
    <ImageBackground source={require('../images/Background_Hint_Geo.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <ClueHeader currentStep={currentStep} />
        <View style={styles.content}>
       
        </View>
        <FooterButtonSolve screen="ClueSoundScreen" /> 
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ClueSoundScreen;
