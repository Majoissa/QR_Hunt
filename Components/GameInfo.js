// GameInfo.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameInfo = ({title, description, difficulty, qrCode }) => {
  return (
    <View style={styles.infoContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    paddingTop: 30, // Ajusta esto al tamaño de GameHeader
    marginTop: -250, // Esto es para la superposición, debería ser igual a la altura del GameHeader pero negativo
    borderRadius: 25,
    backgroundColor: 'white',
    padding: 15,
    zIndex: 3, // Mayor que el zIndex de GameHeader para superponerse sobre él
    overflow: 'hidden', // Asegura que el contenido interno no desborde los bordes redondeados
  },
  
  gameTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center', // Asegura que el título esté centrado
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
