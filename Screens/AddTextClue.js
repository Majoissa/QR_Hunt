import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Navbar from '../Components/Navbar';
import SaveClue from '../Components/SaveClueButton';
import SaveBtn from '../images/Button_Resolve_Text.png';
import CoverImgSelector from '../Components/CoverImgSelector';
import TitleInput from '../Components/TitleInput';
import DescriptionInput from '../Components/DescriptionInput';
import CodeOverlay from '../Components/CodeOverlay';
import ActiveCodeOverlay from '../Components/ActiveCodeOverlay';
import { useNavigation } from '@react-navigation/native';

const AddTextClue = () => {
  const navigation = useNavigation();


  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [code, setCode] = useState("ABC123...");

  const handlePress = () => {
    setIsOverlayVisible(true);
  };

  const handleCodeChange = (newCode) => {
    setCode(newCode);
  };

  const handleAccept = () => {
    setIsOverlayVisible(false);
  };

  return (
    <View style={styles.backgroundImage}>
      <Navbar title="Crear Pista Texto" />
      <View style={{ padding: 20, paddingBottom: 30, height: '80%' }}>
        <ScrollView>
          <CoverImgSelector />
          <TitleInput />
          <DescriptionInput />
          <View style={{ paddingBottom: 20 }}>
            <CodeOverlay onEditPress={handlePress} code={code} onCodeChange={handleCodeChange} />
          </View>
        </ScrollView>
      </View>
      {isOverlayVisible && (
        <View style={styles.overlay}>
          <ActiveCodeOverlay code={code} onCodeChange={handleCodeChange} onAccept={handleAccept} />
        </View>
      )}
      <SaveClue imgSrc={SaveBtn} text="AÑADIR PISTA" />
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#E3963E',
  },
  overlay: {
    position: 'absolute',
    width: windowWidth,
    height: windowHeight,
    backgroundColor: 'black',
    opacity: 0.7,
    left: 0,
    top: 0,
    zIndex: 2,
  },
});

export default AddTextClue;
