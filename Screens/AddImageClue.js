// Importa los componentes necesarios de React y React Native
import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import Navbar from '../Components/Navbar';
import SaveClue from '../Components/SaveClueButton';
import SaveBtn from '../images/Btn_CrearPartida.png';
import CoverImgSelector from '../Components/CoverImgSelector';
import TitleInput from '../Components/TitleInput';
import decorateMapComponent from 'react-native-maps/lib/decorateMapComponent';
import DescriptionInput from '../Components/DescriptionInput';
import CodeOverlay from '../Components/CodeOverlay';

// Define el componente AddImageClue
const AddImageClue = () => {
  return (
    <ImageBackground
    source={require('../images/Background_Hint_Image.png')}
    style={styles.backgroundImage}
    >
    <Navbar title="Crear Pista Imagen"/>
    <View style={{padding: 20, paddingBottom: 30, height: '80%'}}>
      <ScrollView>
      <CoverImgSelector/>
        <TitleInput/>
        <DescriptionInput/>
        <View style={{paddingBottom: 20}}>
          <CodeOverlay/>
        </View>
      </ScrollView>
       
    </View>   
    <SaveClue imgSrc={SaveBtn} text="GUARDAR"/>
    </ImageBackground>
    
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
    //alignItems: 'center',
    //padding: 20,
            },
});

// Exporta el componente para que pueda ser usado en otros archivos
export default AddImageClue;
