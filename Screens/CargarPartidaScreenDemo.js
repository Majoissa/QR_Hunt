import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getAllPartidas, getAllPistas } from '../Components/DBManager';

const CargarPartidaScreenDemo = () => {
  const [partidas, setPartidas] = useState([]);

  useEffect(() => {
    cargarPartidas();
  }, []);

  const cargarPartidas = async () => {
    try {
      const partidasDB = await getAllPartidas();
      const partidasConPistas = await Promise.all(
        partidasDB.map(async (partida) => {
          const pistas = await getAllPistas(partida.Id_partida);
          return { ...partida, pistas };
        })
      );
      setPartidas(partidasConPistas);
    } catch (error) {
      console.error('Error al cargar las partidas:', error);
    }
  };

  const renderPartidaItem = ({ item }) => (
    <View style={styles.partidaItem}>
      <Text>ID:</Text>
      <Text style={styles.partidaTitle}>{item.Id_partida}</Text>
      <Text>Title:</Text>
      <Text style={styles.partidaTitle}>{item.Title}</Text>
      <Text>Description:</Text>
      <Text style={styles.partidaDescription}>{item.Description}</Text>
      <Text>Image:</Text>
      <Text style={styles.partidaDescription}>{item.Image}</Text>
      <Text>Pistas:</Text>
      {item.pistas.map((pista) => (
        <View key={pista.Id_pista} style={styles.pistaItem}>
          <Text style={styles.pistaTitle}>{pista.Title}</Text>
          <Text style={styles.pistaDescription}>{pista.Description}</Text>
          <Text style={styles.pistaDetails}>Type: {pista.Type}</Text>
          <Text style={styles.pistaDetails}>Image: {pista.Image}</Text>
          <Text style={styles.pistaDetails}>Audio: {pista.Audio}</Text>
          <Text style={styles.pistaDetails}>Geolocalizacion: {pista.geolocalizacion}</Text>
          <Text style={styles.pistaDetails}>Solution: {pista.solution}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partidas Disponibles</Text>
      <FlatList
        data={partidas}
        renderItem={renderPartidaItem}
        keyExtractor={(item) => item.Id_partida.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  partidaItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 10,
  },
  partidaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  partidaDescription: {
    fontSize: 14,
    color: '#666666',
  },
  pistaItem: {
    marginLeft: 20,
    marginTop: 5,
  },
  pistaTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  pistaDescription: {
    fontSize: 12,
    color: '#999999',
  },
  pistaDetails: {
    fontSize: 12,
    color: '#999999',
    marginLeft: 10,
  },
});

export default CargarPartidaScreenDemo;
