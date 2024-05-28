import React, { useState } from 'react';
import { TouchableOpacity, ImageBackground, Text, StyleSheet, Modal, View, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const FooterButtonSolve = ({ screen, onValidate }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [code, setCode] = useState('');
  const navigation = useNavigation(); 

  const getImageSource = () => {
    switch (screen) {
      case 'ClueImageScreen':
        return require('../images/Button_Resolve_Img.png');
      case 'ClueLocationScreen':
        return require('../images/Button_Resolve_GeoLoc.png');
      case 'ClueSoundScreen':
        return require('../images/Button_Resolve_Audio.png');
      case 'ClueTextScreen':
        return require('../images/Button_Resolve_Text.png');
      default:
        return require('../images/Button_Resolve_Img.png');
    }
  };

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleValidate = () => {
    onValidate(code);
    setModalVisible(false);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../images/User_Preview_Background.png')} style={styles.backgroundImage}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <ImageBackground source={getImageSource()} style={styles.buttonBackgroundImage}>
            <Text style={styles.text}>RESOLVER</Text>
          </ImageBackground>
        </TouchableOpacity>
      </ImageBackground>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPress={handleCloseModal}>
          <View style={styles.modalContentWrapper}>
            <TouchableOpacity style={styles.modalContent} activeOpacity={1} onPress={() => {}}>
              <Text style={styles.modalTitle}>¿Cuál es la solución?</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  onChangeText={setCode}
                  value={code}
                  placeholder="Código"
                  placeholderTextColor="#6cbe45"
                />
                <TouchableOpacity style={styles.arrowButton} onPress={handleValidate}>
                  <Image source={require('../images/Green_Arrow.png')} style={styles.arrowImage} />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  backgroundImage: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: '90%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    overflow: 'hidden',
  },
  buttonBackgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  modalContent: {
    backgroundColor: '#D8A461',
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5D7B6',
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
  },
  input: {
    height: 50,
    borderColor: 'transparent',
    color: '#005500',
    flex: 1,
    fontSize: 20,
  },
  arrowButton: {
    padding: 15,
    borderRadius: 25,
    backgroundColor: '#6cbe45',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowImage: {
    width: 25,
    height: 25,
    tintColor: '#fff',
  },
});

export default FooterButtonSolve;
