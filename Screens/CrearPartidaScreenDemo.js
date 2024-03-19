import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { insertPartida } from '../Components/DBManager';

const CrearPartidaScreenDemo = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const handleGuardarPartida = async () => {
    try {
      const partidaId = await insertPartida(title, image, description);
      console.log(`Partida guardada con ID: ${partidaId}`);
      setMessage(`Partida guardada con ID: ${partidaId}`);
      // Puedes hacer algo con el ID de la partida guardada, como navegar a otra pantalla
    } catch (error) {
      setMessage('Error al guardar la partida');
      console.error(error);
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
      {message ? <Text>{message}</Text> : null}
    </View>
  );
};

export default CrearPartidaScreenDemo;
