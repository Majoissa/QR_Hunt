// Importa los componentes necesarios de React y React Native
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import Navbar from '../Components/Navbar';
import SaveClue from '../Components/SaveClueButton';
import SaveBtn from '../images/Button_Resolve_Text.png';
import CoverImgSelector from '../Components/CoverImgSelector';
import TitleInput from '../Components/TitleInput';
import decorateMapComponent from 'react-native-maps/lib/decorateMapComponent';
import DescriptionInput from '../Components/DescriptionInput';
import CodeOverlay from '../Components/CodeOverlay';

// Define el componente AddImageClue
const AddTextClue = () => {
  return (
    <View
    //source={require('../images/Background_Hint_Text.png')}
    style={styles.backgroundImage}
    >
    <Navbar title="Crear Pista Texto"/>
    <View style={{padding: 20, marginBottom: 100}}>
        <CoverImgSelector/>
        <TitleInput/>
        <DescriptionInput/>
        
    </View>   
    <SaveClue imgSrc={SaveBtn} text="AÑADIR PISTA"/>
    </View>
    
  );
};

// Estilos para el componente
const styles = StyleSheet.create({
  container: {
    flex: 1, // Usa todo el espacio disponible
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente
    backgroundColor: '#f0f0f0' // Un fondo gris claro
  },
  text: {
    fontSize: 20, // Tamaño de fuente grande
    fontWeight: 'bold' // Texto en negrita
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#E3963E',
    //alignItems: 'center',
    //padding: 20,
    },
});

// Exporta el componente para que pueda ser usado en otros archivos
export default AddTextClue;
