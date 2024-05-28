import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ClueHeader from '../Components/ClueHeader';
import FooterButtonSolve from '../Components/FootButtonSolve';
import ClueCardImage from '../Components/ClueCardImage';
import CorrectAnswerComponent from '../Components/SolutionComponents/CorrectAnswerComponent';
import IncorrectAnswerComponent from '../Components/SolutionComponents/WrongAnswerComponent'; 

const ClueImageScreen = ({ currentStep, navigation }) => {
  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);

  const handleNext = () => {
    setShowCorrect(false);
    navigation.navigate('ClueLocationScreen2'); 
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
    <ImageBackground source={require('../images/Background_Hint_Text.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <ClueHeader currentStep={currentStep} />
        <ClueCardImage
          title="Haz descubierto un pergamino,            ¿Que secretos revelará?"
          imageSource={require('../images/Test/game1.png')}
          description="Descripción de la pista aquí. Proporcione informaciuí. tación adicional sobre la pistaDescripción de la pista aquí. Proporcione información adicional sobre la pistaDescripción de la pista aquí. Proporcione información ón adicional sobre la pista."
        />
        <FooterButtonSolve screen="ClueImageScreen" onValidate={validateCode} />
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

export default ClueImageScreen;