import React, { useState} from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ClueHeader from '../Components/ClueHeader'; 
import FooterButtonSolve from '../Components/FootButtonSolve'; 
import ClueCardText from '../Components/ClueCardText';
import CorrectAnswerComponent from '../Components/SolutionComponents/CorrectAnswerComponent';
import IncorrectAnswerComponent from '../Components/SolutionComponents/WrongAnswerComponent';
import MissionCompletedComponent from '../Components/MissionCompletedComponent'; 

const ClueTextScreen = ({ currentStep, navigation }) => {
  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [missionCompleted, setMissionCompleted] = useState(false);

  const handleNext = () => {
    setShowCorrect(false);
    setMissionCompleted(true); 
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

  if (missionCompleted) {
    return <MissionCompletedComponent />;
  }

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
        <View style={styles.content}>
          <ClueCardText
            title="Has descubierto un pergamino... ¿Que secretos revelara?"
            description="Descripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pista."
          />
        </View>
        <FooterButtonSolve screen="ClueTextScreen" onValidate={validateCode} />
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
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

export default ClueTextScreen;