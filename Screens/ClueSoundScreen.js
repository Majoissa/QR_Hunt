import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ClueHeader from '../Components/ClueHeader'; 
import FooterButtonSolve from '../Components/FootButtonSolve';
import CorrectAnswerComponent from '../Components/SolutionComponents/CorrectAnswerComponent';
import IncorrectAnswerComponent from '../Components/SolutionComponents/WrongAnswerComponent';
import ClueSoundCard from '../Components/ClueSoundCard';

const ClueSoundScreen = ({ currentStep, navigation }) => {
  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);

  const handleNext = () => {
    setShowCorrect(false);
    navigation.navigate('ClueTextScreen4');
  };

  const handleRetry = () => {
    setShowIncorrect(false);
  };

  const validateCode = (code) => {
    if (code === '1234') {
      setShowCorrect(true);
    } else {
      setShowIncorrect(true);
    }
  };

  if (showCorrect) {
    return <CorrectAnswerComponent onPressNext={handleNext} />;
  }

  if (showIncorrect) {
    return <IncorrectAnswerComponent onPressNext={handleRetry} />;
  }

  return (
    <ImageBackground source={require('../images/Background_Hint_Geo.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <ClueHeader currentStep={currentStep} />
        <View style={styles.content}>
          <ClueSoundCard 
            title="Encontraste una cinta misteriosa, ¿Podrás resolverla?" 
            imageSource={require('../images/SoundImageScreen.png')} 
          />
        </View>
        <FooterButtonSolve screen="ClueSoundScreen" onValidate={validateCode} /> 
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
    paddingTop: 20, 
  },
});

export default ClueSoundScreen;