import React, { useState, useEffect } from 'react';
import { View, Button, FlatList, Text, TouchableOpacity } from 'react-native';
import { getAllPartidas } from '../Components/DBManager';

const DetallesPartidaScreenDemo = ({ navigation }) => {
  const [partidas, setPartidas] = useState([]);

  useEffect(() => {
    const cargarPartidas = async () => {
      const partidasAlmacenadas = await getAllPartidas();
      setPartidas(partidasAlmacenadas);
    };

    cargarPartidas();
  }, []);

  const handleSeleccionarPartida = (partida) => {
    navigation.navigate('DetallesPartida', { partida });
  };

  return (
    <View>
      <FlatList
        data={partidas}
        keyExtractor={(item) => item.Id_partida.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSeleccionarPartida(item)}>
            <View>
              <Text>{item.Title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default DetallesPartidaScreenDemo;
