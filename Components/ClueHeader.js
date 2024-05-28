import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ClueHeaderCloseButton from './ClueHeaderCloseButton';
import ClueHeaderProgressBar from './ClueHeaderProgessBar';
import ClueHeaderText from './ClueHeaderText';

const ClueHeader = ({ currentStep }) => {
  return (
    <ImageBackground source={require('../images/Top_Ui.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.topRow}>
          <ClueHeaderCloseButton />
          <ClueHeaderText currentStep={currentStep} />
        </View>
        <ClueHeaderProgressBar currentStep={currentStep} totalSteps={4} />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: 160, 
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
  },
  container: {
    width: '100%',
    height: '100%',
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15, 
    position: 'relative',
  },
  closeButtonContainer: {
    position: 'absolute',
    left: 0,
    marginLeft: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressBarContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ClueHeader;
