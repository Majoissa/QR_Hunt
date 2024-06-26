import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import GameHeader from '../Components/GameHeader';
import GameInfo from '../Components/GameInfo';

const GameDescriptionScreen = () => {
  const gameData = {
    title: 'El tesoro del jardín',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    difficulty: '4 pistas',
    qrCode: '630Y3',
    textList: 'Lista de Codigos',
    imageUrl: 'https://juegosparajugarencasa.com/wp-content/uploads/2021/02/juego-busqueda-del-tesoro-pdf.jpg',
  };

  return (
    
      <View style={styles.container}>
        <GameHeader imageUrl={gameData.imageUrl} />
       
        <GameInfo
          title={gameData.title}
          description={gameData.description}
          difficulty={gameData.difficulty}
          textList={gameData.textList}
          qrCode={gameData.qrCode}
        />
        
      </View>
   
  );
};

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
});

export default GameDescriptionScreen;