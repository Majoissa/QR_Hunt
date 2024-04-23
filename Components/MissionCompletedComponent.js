import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const MissionCompletedComponent = () => {
      <View style={styles.container}>
        <Text style={[styles.text, styles.missionCompletedText]}>
          MISIÓN COMPLETADA!
        </Text>
        <Text style={[styles.text, styles.descriptionText]}>
          ¡Muy bien aventurero! Encontraste el tesoro escondido!
        </Text>
        <Video
          source={require('../videos/YouWin.mp4')} // Ruta de tu video del tesoro
          style={styles.video}
          resizeMode="cover"
          repeat={true}
          paused={false}
        />
        <TouchableOpacity style={styles.button}>
          <ImageBackground
            source={require('../images/Button_Resolve_Text.png')} // Ruta de tu imagen de fondo del botón
            style={styles.buttonBackground}
            resizeMode="cover"
          >
            <Text style={styles.buttonText}>VOLVER A PROBAR</Text>
          </ImageBackground>
        </TouchableOpacity>
      </View>
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginBottom: 10,
  },
  missionCompletedText: {
    fontSize: 36,
    color: 'yellow',
  },
  descriptionText: {
    fontSize: 18,
    color: 'white',
  },
  video: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
  buttonBackground: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default MissionCompletedComponent;
