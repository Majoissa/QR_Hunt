import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Modal, FlatList, TouchableOpacity } from 'react-native';
import { insertPartida, insertPista, getAllPistas } from '../Components/DBManager';

const CrearPartidaScreenDemo = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');
  const [partidaId, setPartidaId] = useState(null);
  const [tipoPista, setTipoPista] = useState('');
  const [tituloPista, setTituloPista] = useState('');
  const [descripcionPista, setDescripcionPista] = useState('');
  const [audio, setAudioPista] = useState('');
  const [geolocalizacion, setGeolocalizacionPista] = useState('');
  const [imagenPista, setImagenPista] = useState('');
  const [pistas, setPistas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Cargar las pistas asociadas a la partida actual cuando se monta el componente
    if (partidaId) {
      loadPistas();
    }
  }, [partidaId]);

  const loadPistas = async () => {
    try {
      const pistasData = await getAllPistas(partidaId);
      setPistas(pistasData);
    } catch (error) {
      console.error('Error al cargar las pistas:', error);
    }
  };

  const handleGuardarPartida = async () => {
    try {
      const id = await insertPartida(title, image, description);
      console.log(`Partida guardada con ID: ${id}`);
      setMessage(`Partida guardada con ID: ${id}`);
      setPartidaId(id);
    } catch (error) {
      setMessage('Error al guardar la partida');
      console.error(error);
    }
  };

  const handleCrearPista = async () => {
    try {
      if (partidaId) {
        const pistaId = await insertPista(
          tipoPista,
          imagenPista,
          tituloPista,
          descripcionPista,
          audio, // URL del audio (si lo hay)
          geolocalizacion, // Geolocalización (si la hay)
          '', // Solución de la pista (puedes obtenerla del estado)
          partidaId
        );
        console.log(`Pista guardada con ID: ${pistaId}`);
        // Actualizar la lista de pistas mostradas en la página
        loadPistas();
      } else {
        console.error('Error: No se ha creado ninguna partida aún.');
      }
    } catch (error) {
      console.error('Error al guardar la pista:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Crear Nueva Partida</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        placeholder="Título"
        onChangeText={setTitle}
        value={title}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        placeholder="URL de la Imagen"
        onChangeText={setImage}
        value={image}
      />
      <TextInput
        style={{ height: 80, borderColor: 'gray', borderWidth: 1, margin: 10, padding: 5 }}
        placeholder="Descripción"
        multiline
        onChangeText={setDescription}
        value={description}
      />
      <Button title="Guardar Partida" onPress={handleGuardarPartida} />
      <Text>Seleccionar Tipo de Pista:</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity onPress={() => { setTipoPista('Imagen'); setModalVisible(true); }}>
          <Text>Imagen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setTipoPista('Audio'); setModalVisible(true); }}>
          <Text>Audio</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setTipoPista('Geolocalización'); setModalVisible(true); }}>
          <Text>Geolocalización</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { setTipoPista('Texto'); setModalVisible(true); }}>
          <Text>Texto</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <View style={{ backgroundColor: 'white', padding: 20 }}>
            <Text>Título de la Pista:</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, padding: 5 }}
              placeholder="Título de la pista"
              onChangeText={setTituloPista}
              value={tituloPista}
            />
            <Text>Descripción de la Pista:</Text>
            <TextInput
              style={{ height: 80, borderColor: 'gray', borderWidth: 1, marginVertical: 10, padding: 5 }}
              placeholder="Descripción de la pista"
              multiline
              onChangeText={setDescripcionPista}
              value={descripcionPista}
            />
            {tipoPista === 'Audio' && (
              <View>
                <Text>URL del Audio:</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, padding: 5 }}
                  placeholder="URL del audio"
                  onChangeText={setAudioPista}
                  value={audio}
                />
              </View>
            )}
            {tipoPista === 'Geolocalización' && (
              <View>
                <Text>Geolocalización:</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, padding: 5 }}
                  placeholder="Geolocalización"
                  onChangeText={setGeolocalizacionPista}
                  value={geolocalizacion}
                />
              </View>
            )}
            {tipoPista !== 'Geolocalización' && (
              <View>
                <Text>URL de la Imagen de la Pista:</Text>
                <TextInput
                  style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginVertical: 10, padding: 5 }}
                  placeholder="URL de la imagen de la pista"
                  onChangeText={setImagenPista}
                  value={imagenPista}
                />
              </View>
            )}
            <Button title="Guardar Pista" onPress={() => { handleCrearPista(); setModalVisible(false); }} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      {message ? <Text>{message}</Text> : null}
      <FlatList
        data={pistas}
        keyExtractor={(item) => item.Id_pista.toString()}
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>{item.Title}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default CrearPartidaScreenDemo;
