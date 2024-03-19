import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getAllPartidas } from '../Components/DBManager';

const CargarPartidaScreenDemo = () => {
  const [partidas, setPartidas] = useState([]);

  useEffect(() => {
    cargarPartidas();
  }, []);

  const cargarPartidas = async () => {
    try {
      const partidasDB = await getAllPartidas();
      setPartidas(partidasDB);
    } catch (error) {
      console.error('Error al cargar las partidas:', error);
    }
  };

  const renderPartidaItem = ({ item }) => (
    <View style={styles.partidaItem}>
      <Text style={styles.partidaTitle}>{item.Title}</Text>
      <Text style={styles.partidaDescription}>{item.Description}</Text>
      {/* Aquí podrías mostrar más detalles como la imagen u otros campos */}
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
});

export default CargarPartidaScreenDemo;
