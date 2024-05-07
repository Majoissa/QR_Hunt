import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { getAllPartidas, deletePartida } from '../Components/DBManager';
import { useNavigation } from '@react-navigation/native'; // Importa el hook de navegación

const CargarPartidaScreenDemo = () => {
  const [partidas, setPartidas] = useState([]);
  const navigation = useNavigation(); // Obtiene el objeto de navegación

  useEffect(() => {
    cargarPartidas();
  }, []);

  const handleVerPistas = (partida) => {
    // Navega a la pantalla para ver/editar las pistas y pasa el ID de la partida como parámetro
    navigation.navigate('Pistas', { partidaId: partida.Id_partida });
  };
  

  const cargarPartidas = async () => {
    try {
      const partidasDB = await getAllPartidas();
      setPartidas(partidasDB);
    } catch (error) {
      console.error('Error al cargar las partidas:', error);
    }
  };

  const handleEliminarPartida = async (idPartida) => {
    try {
      await deletePartida(idPartida);
      cargarPartidas();
      Alert.alert('Partida eliminada con éxito');
    } catch (error) {
      console.error('Error al eliminar la partida:', error);
      Alert.alert('Error al eliminar la partida');
    }
  };

  const handleEditarPartida = (partida) => {
    // Navega a la pantalla de edición y pasa los detalles de la partida como parámetro
    navigation.navigate('EditarPartida', { partida });
  };

  const renderPartidaItem = ({ item }) => (
    <View style={styles.partidaItem}>
      <Text style={styles.partidaTitle}>{item.Title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, styles.editButton]} onPress={() => handleEditarPartida(item)}>
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.pistasButton]} onPress={() => handleVerPistas(item)}>
          <Text style={styles.buttonText}>Pistas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={() => handleEliminarPartida(item.Id_partida)}>
          <Text style={styles.buttonText}>Eliminar</Text>
        </TouchableOpacity>
      </View>
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
    paddingBottom: 10,
  },
  partidaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  editButton: {
    backgroundColor: '#4CAF50', // Color verde para editar
  },
  deleteButton: {
    backgroundColor: '#FF5733', // Color rojo para eliminar
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CargarPartidaScreenDemo;
