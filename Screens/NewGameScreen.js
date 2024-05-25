import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native';
import CoverImgSelector from '../Components/CoverImgSelector';
import TitleInput from '../Components/TitleInput';
import { Ionicons } from 'react-native-vector-icons';
import DescriptionInput from '../Components/DescriptionInput';
import { ScrollView } from 'react-native-gesture-handler';
import Navbar from '../Components/Navbar';
import TextIcon from '../images/Text_Icon.png';
import MicIcon from '../images/Mic_Icon.png';
import ImageIcon from '../images/Image_Icon.png';
import AddClue from '../Components/AddClue';
import { Zocial } from '@expo/vector-icons';
import SaveIcon from '../images/save.png';

NewGameScreen = ({ navigation }) => {
    const handleSavePress = () => {
        // Acción que deseas realizar al presionar el icono
        console.log("Save icon pressed");
    };
    return(
        <ImageBackground
            source={require('../images/Home_Background_Animation00.png')}
            style={styles.backgroundImage}
            >
            {/* Capa oscurecedora */}
            <View style={styles.overlay} />            
            <Navbar title="Crear Partida" />
            <TouchableOpacity style={styles.overlayTouchable} onPress={handleSavePress}>
            <Ionicons name="save" size={30} color="orange" /> 
            </TouchableOpacity>
            {/* Contenido adicional aquí si es necesario */}
            <ScrollView style={{width: '100%', paddingTop: 80, paddingBottom: 80}}>
                <View style={{padding: 20, paddingBottom: 100}}>
                    <CoverImgSelector/>
                    <TitleInput/>
                    <DescriptionInput/>
                    <View style={{ top: 5, bottom: 20}}>
                        <Text style={styles.label}>Pistas</Text>
                        <View style={styles.row}>
                            <View style={{backgroundColor: '#d78e37', padding: 8, borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}>
                                <Image source={TextIcon}
                                style={styles.icon}
                                resizeMode="contain"/>
                            </View>
                            <View style={{backgroundColor: '#d78e37', flex: 1, marginLeft: 5, padding: 8, alignItems: 'center', justifyContent: 'center',  borderRadius: 5}}>
                                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, alignSelf: 'flex-start', marginStart: 7}}>Pista de texto...</Text>
                            </View>
                        </View>
                        <View style={styles.row}>
                                <View style={{backgroundColor: '#6b7695', padding: 8, borderTopLeftRadius: 8, borderBottomLeftRadius: 5}}>
                                    <Image source={MicIcon}
                                    style={styles.icon}
                                    resizeMode="contain"/>
                                </View>
                                <View style={{backgroundColor: '#6b7695', flex: 1, marginLeft: 5, padding: 8, alignItems: 'center', justifyContent: 'center',  borderRadius: 5}}>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, alignSelf: 'flex-start', marginStart: 7}}>Pista de audio...</Text>
                                </View>
                        </View>
                        <View style={styles.row}>
                                <View style={{backgroundColor: '#609872', padding: 8, borderTopLeftRadius: 5, borderBottomLeftRadius: 5}}>
                                    <Image source={ImageIcon}
                                    style={styles.icon}
                                    resizeMode="contain"/>
                                </View>
                                <View style={{backgroundColor: '#609872', flex: 1, marginLeft: 5, padding: 5, alignItems: 'center', justifyContent: 'center',  borderRadius: 5}}>
                                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16, alignSelf: 'flex-start', marginStart: 7}}>Pista de imagen...</Text>
                                </View>
                        </View>
               
                    </View>
                </View>
            </ScrollView>
            <AddClue/>
           {/*<AddClue/>*/} 
        </ImageBackground>
        );
    }
        
const styles = StyleSheet.create({
backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    //alignItems: 'center',
    //padding: 20,
            },
overlay: {
    ...StyleSheet.absoluteFillObject, // Ocupa todo el espacio del padre
    backgroundColor: 'black', // Color de la capa
    opacity: 0.8, // Ajusta la transparencia aquí
            },
            
lbl: {
    fontSize: 18,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
},
titleContainer: {
    width: '100%',
    marginBottom: 15, // Espacio entre el contenedor de título y descripción
},
label: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5, // Espacio entre la etiqueta y el campo de texto
},
overlayTouchable: {
    position: 'absolute',
    top: 40, // Ajusta según sea necesario
    right: 25, // Ajusta según sea necesario
    zIndex: 999999, // Asegura que esté encima de la Navbar
},
overlayImage: {
    width: 25, // Ajusta según sea necesario
    height: 30, // Ajusta según sea necesario
},
inputTitle: {
    backgroundColor: 'grey', // Fondo blanco para mayor visibilidad
    borderWidth: 1, // Borde sutil para el campo de entrada
    borderColor: 'gray', // Color del borde
    borderRadius: 15, // Bordes redondeados
    padding: 10, // Espacio interior
  //  height: 40, // Altura fija
},
descriptionContainer: {
    width: '100%',
},
inputDescription: {
    backgroundColor: 'grey',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 15,
    paddingTop: 30,
    padding: 10,
    paddingBottom: 30,
    marginBottom: 30,
    textAlignVertical: 'top', // Alinea el texto en la parte superior para campos de texto multilínea
    minHeight: 100, // Altura mínima para dar espacio suficiente para escribir
},row: {
    flexDirection: 'row',
    //backgroundColor: 'blue',
    justifyContent: 'space-between',
    padding: 5,
   
},
icon: {
    width: 30,   // Ancho de la imagen
    height: 30,  // Alto de la imagen
  },
});

export default NewGameScreen;