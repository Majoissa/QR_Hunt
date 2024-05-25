import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import ClueHeader from '../Components/ClueHeader'; 
import FooterButtonSolve from '../Components/FootButtonSolve'; 
import ClueCardText from '../Components/ClueCardText';


const ClueTextScreen = ({ currentStep }) => {
  return (
    <ImageBackground source={require('../images/Background_Hint_Text.png')} style={styles.backgroundImage}>
      <View style={styles.container}>
        <ClueHeader currentStep={currentStep} />
        <View style={styles.content}>
          <ClueCardText
            title="Has descubierto un pergamino... ¿Que secretos revelara ?"
            description="Descripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pistaescripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pista.escripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobre la pista. Descripción de la pista aquí. Proporcione información adicional sobr"
          />
        </View>
        <FooterButtonSolve screen="ClueTextScreen" /> 
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
