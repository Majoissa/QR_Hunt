import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const GameInfo = ({title, description, difficulty, qrCode, onDelete}) => {
  return (

   
    <View style={styles.infoContainer}> 
         <ScrollView style={{ height: 600  }}>
        <TouchableOpacity onPress={onDelete} style={styles.imageButton}>
          <Image 
            source={require('../images/Delette_Button.png')}
            style={styles.imageStyle} 
          />
        </TouchableOpacity>
    <Text style={styles.gameTitle}>{title}</Text>
      <Text style={styles.descriptionTitle}>Descripción</Text>
      <Text style={styles.descriptionText}>{description}</Text>
      <Text style={styles.difficultyTitle}>Dificultad</Text>
      <Text style={styles.difficultyText}>{difficulty}</Text>
      <TouchableOpacity style={styles.shareButton}>
        <Text style={styles.shareButtonText}>Comparte este código:</Text>
        <Text style={styles.codeText}>{qrCode}</Text>
      </TouchableOpacity>
      <Text style ={styles.textList}>Lista de QR</Text>
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadButtonText}>Descargar lista QR</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.playButton}>
        <Text style={styles.playButtonText}>JUGAR</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>

  );
};

const styles = StyleSheet.create({
  infoContainer: {
    position: 'absolute',
    left: '1%',
   
    paddingTop: 30, 
    marginTop: 280, 
    borderRadius: 25,
    backgroundColor: 'white',
    padding: 15,
    height: 500,
    overflow: 'hidden', 
  },

  imageStyle: {
    width: 60, 
    height: 60},
    
  imageButton:{
      position: 'absolute',
    right: 10, 
    top: 0 
  },

  gameTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center', 
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 16,
  },
  difficultyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  difficultyText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  shareButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 50,
    paddingHorizontal: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginBottom: 10,
  },
  shareButtonText: {
    fontSize: 20,
    color: 'white',
    marginRight: 10,
  },
  codeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },

  textList: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  
  downloadButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  downloadButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  playButton: {
    backgroundColor: '#FFC107',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  playButtonText: {
    fontSize: 22,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default GameInfo;
