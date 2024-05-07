import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TextInput, Button } from 'react-native';
import { getAllPistas, insertOrUpdatePista } from '../Components/DBManager';

const VerPistasScreenDemo = ({ route, navigation }) => {
  const { partidaId } = route.params;
  const [pistas, setPistas] = useState([]);

  useEffect(() => {
    cargarPistas(partidaId);
  }, []);

  const cargarPistas = async (partidaId) => {
    try {
      const pistasDB = await getAllPistas(partidaId);
      setPistas(pistasDB);
    } catch (error) {
      console.error('Error al cargar las pistas:', error);
    }
  };

  const guardarCambios = async () => {
    try {
      await Promise.all(
        pistas.map(async (pista) => {
          // Obtener todas las pistas de la partida
          const pistasPartida = await getAllPistas(pista.Id_partida);
          // Buscar la pista original por su ID
          const originalPista = pistasPartida.find(p => p.Id_pista === pista.Id_pista);
          if (!originalPista) {
            console.error(`No se encontró la pista original con ID: ${pista.Id_pista}`);
            return;
          }
          // Crear un objeto con los valores actualizados
          const updatedValues = {
            type: originalPista.Type,
            image: pista.Image,
            title: pista.Title,
            description: pista.Description,
            audio: pista.Audio,
            geolocalizacion: pista.geolocalizacion,
            solution: pista.solution,
            idPartida: pista.Id_partida,
          };
          // Actualizar la pista con los valores actualizados
          await insertOrUpdatePista(
            pista.Id_pista,
            updatedValues.type,
            updatedValues.image,
            updatedValues.title,
            updatedValues.description,
            updatedValues.audio,
            updatedValues.geolocalizacion,
            updatedValues.solution,
            updatedValues.idPartida
          );
        })
      );
      navigation.navigate('CargarPartida');
    } catch (error) {
      console.error('Error al guardar los cambios:', error);
    }
  };

  const handleImageChange = (id, image) => {
    setPistas(prevPistas => prevPistas.map(pista => pista.Id_pista === id ? { ...pista, Image: image } : pista));
  };
  
  const handleAudioChange = (id, audio) => {
    setPistas(prevPistas => prevPistas.map(pista => pista.Id_pista === id ? { ...pista, Audio: audio } : pista));
  };
  
  const handleGeolocalizacionChange = (id, geolocalizacion) => {
    setPistas(prevPistas => prevPistas.map(pista => pista.Id_pista === id ? { ...pista, geolocalizacion: geolocalizacion } : pista));
  };
  
  
  

  const handleTitleChange = (id, title) => {
    setPistas(prevPistas => prevPistas.map(pista => pista.Id_pista === id ? { ...pista, Title: title } : pista));
  };

  const handleDescriptionChange = (id, description) => {
    setPistas(prevPistas => prevPistas.map(pista => pista.Id_pista === id ? { ...pista, Description: description } : pista));
  };

  const renderPistaItem = ({ item }) => (
    <View style={styles.pistaItem}>
      <Text style={styles.pistaTitle}>{item.Title}:</Text>
      <TextInput
        style={styles.input}
        value={item.Title}
        onChangeText={text => handleTitleChange(item.Id_pista, text)}
      />
      <Text style={styles.pistaTitle}>Descripción:</Text>
      <TextInput
        style={styles.input}
        value={item.Description}
        onChangeText={text => handleDescriptionChange(item.Id_pista, text)}
      />
      {item.Image && <Text style={styles.pistaTitle}>Imagen:</Text>}
      {item.Image && <TextInput
                        style={styles.input}
                        value={item.Image}
                        onChangeText={text => handleImageChange(item.Id_pista, text)}
                        />}
      {item.Audio && <Text style={styles.pistaTitle}>Audio:</Text>}
      {item.Audio && <TextInput
                        style={styles.input}
                        value={item.Audio}
                        onChangeText={text => handleAudioChange(item.Id_pista, text)}
                        />}
      {item.geolocalizacion && <Text style={styles.pistaTitle}>Geolocalización:</Text>}
      {item.geolocalizacion && <TextInput
                                    style={styles.input}
                                    value={item.geolocalizacion}
                                    onChangeText={text => handleGeolocalizacionChange(item.Id_pista, text)}
                                    />}
      {item.solution && <Text>Solución: {item.solution}</Text>}
    </View>
  );

  // Filtrar las pistas por número de partida
  const filteredPistas = pistas.filter(pista => pista.Id_partida === partidaId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pistas de la Partida {partidaId}</Text>
      <FlatList
        data={filteredPistas}
        renderItem={renderPistaItem}
        keyExtractor={(item) => item.Id_pista.toString()}
      />
      <Button title="Guardar Cambios" onPress={guardarCambios} />
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
  pistaItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginBottom: 10,
    paddingBottom: 10,
  },
  pistaTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 8,
    marginBottom: 10,
  },
});

export default VerPistasScreenDemo;
