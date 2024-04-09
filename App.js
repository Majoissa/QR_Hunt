import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreenDemo';
import CrearPartidaScreen from './Screens/CrearPartidaScreenDemo';
import CargarPartidaScreenDemo from './Screens/CargarPartidaScreenDemo';
import EditarPartidaScreenDemo from './Screens/EditarPartidaScreenDemo';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CrearPartida" component={CrearPartidaScreen} />
        <Stack.Screen name="CargarPartida" component={CargarPartidaScreenDemo} />
        <Stack.Screen name="EditarPartida" component={EditarPartidaScreenDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
