import React, { useState } from 'react';
import { View, Button, TextInput } from 'react-native';
import { insertPista } from '../Components/DBManager';

const AgregarPistaScreenDemo = ({ route, navigation }) => {
  const { idPartida } = route.params; // Obtén el ID de la partida desde las props de navegación

  const [type, setType] = useState('');
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [audio, setAudio] = useState('');
  const [geolocalizacion, setGeolocalizacion] = useState('');
  const [solution, setSolution] = useState('');

  const handleGuardarPista = async () => {
    await insertPista(type, image, title, description, audio, geolocalizacion, solution, idPartida);
    navigation.navigate('CrearPartida', { idPartida }); // Regresar a la página de creación de partida
  };

  return (
    <View>
      {/* Añade campos de entrada para los detalles específicos de la pista */}
      <TextInput placeholder="Type" value={type} onChangeText={(text) => setType(text)} />
      <TextInput placeholder="Image" value={image} onChangeText={(text) => setImage(text)} />
      <TextInput placeholder="Title" value={title} onChangeText={(text) => setTitle(text)} />
      <TextInput placeholder="Description" value={description} onChangeText={(text) => setDescription(text)} />
      <TextInput placeholder="Audio" value={audio} onChangeText={(text) => setAudio(text)} />
      <TextInput placeholder="Geolocalizacion" value={geolocalizacion} onChangeText={(text) => setGeolocalizacion(text)} />
      <TextInput placeholder="Solution" value={solution} onChangeText={(text) => setSolution(text)} />

      {/* Botón para guardar la pista */}
      <Button title="Guardar Pista" onPress={handleGuardarPista} />
    </View>
  );
};

export default AgregarPistaScreenDemo;
