import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ClueHeader from '../Components/ClueHeader'; 
import FooterButtonSolve from '../Components/FootButtonSolve'; 
import ClueCardImage from '../Components/ClueCardImage';

const ClueImageScreen = ({ currentStep }) => {
    return (
      <ImageBackground source={require('../images/Background_Hint_Text.png')} style={styles.backgroundImage}>
        <View style={styles.container}>
          <ClueHeader currentStep={currentStep} />
          <ClueCardImage
        title="Título de la Pista"
        imageSource={require('../images/Test/game1.png')}
        description="Descripción de la pista aquí. Proporcione información adicional sobre la pistaDescripción de la pista aquí. Proporcione información adicional sobre la pista Descripción de la pista aquí. Proporcione información adicional sobre la pistaDescripción de la pista aquí. Proporcione información adicional sobre la pista"
         
      />
          <FooterButtonSolve screen="ClueImageScreen" /> 
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