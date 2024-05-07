// EditarPartidaScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { insertOrUpdatePartida } from '../Components/DBManager';

const EditarPartidaScreenDemo = ({ route, navigation }) => {
    const { partida } = route.params;
    const [title, setTitle] = useState(partida.Title);
    const [description, setDescription] = useState(partida.Description);
  
    const handleGuardarCambios = async () => {
      try {
        await insertOrUpdatePartida(partida.Id_partida, title, partida.Image, description);
        navigation.goBack();
      } catch (error) {
        console.error('Error al guardar los cambios:', error);
      }
    };
  
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <Text>Título:</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
          value={title}
          onChangeText={setTitle}
        />
        <Text>Descripción:</Text>
        <TextInput
          style={{ height: 80, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
          multiline
          value={description}
          onChangeText={setDescription}
        />
        <Button title="Guardar Cambios" onPress={handleGuardarCambios} />
      </View>
    );
  };
  


export default EditarPartidaScreenDemo;
