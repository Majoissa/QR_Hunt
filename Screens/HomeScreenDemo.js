import React from 'react';
import { View, Button } from 'react-native';
import { dropTables } from '../Components/DBManager';

const HomeScreenDemo = ({ navigation }) => {
  const handleEliminarDatos = async () => {
    await dropTables(); // Llama a la función para eliminar todos los datos
    // Puedes añadir aquí cualquier lógica adicional después de eliminar los datos
  };

  return (
    <View>
      <Button title="Cargar Partida" onPress={() => navigation.navigate('CargarPartida')} />
      <Button title="Crear Partida" onPress={() => navigation.navigate('CrearPartida')} />
      <Button title="Eliminar Todos los Datos" onPress={handleEliminarDatos} />
    </View>
  );
};

export default HomeScreenDemo;
