import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground, Image } from 'react-native';
import CoverImgSelector from '../Components/CoverImgSelector';
import { ScrollView } from 'react-native-gesture-handler';
import Navbar from '../Components/Navbar';
import TextIcon from '../images/Text_Icon.png';
import MicIcon from '../images/Mic_Icon.png';
import ImageIcon from '../images/Image_Icon.png';


NewGameScreen = ({ navigation }) => {
    return(
       
                <ImageBackground
                    source={require('../images/Home_Background_Animation00.png')}
                    style={styles.backgroundImage}
                >
                    {/* Capa oscurecedora */}
                    <View style={styles.overlay} />
                    
                    <Navbar title="Crear Partida" />
                    <View>
 {/* Contenido adicional aquí si es necesario */}
                    <ScrollView style={{width: '100%'}}>
                    <CoverImgSelector/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.label}>Título (obligatorio)</Text>
                        <TextInput
                            style={styles.inputTitle}
                            placeholder="Ingresa un título único que no se repita"
                        />
                    </View>
                    <View style={styles.descriptionContainer}>
                        <Text style={styles.label}>Descripción</Text>
                        <TextInput
                            style={styles.inputDescription}
                            multiline={true} // Permite que el campo de texto acepte múltiples líneas
                            numberOfLines={4} // Define el número de líneas que el campo de texto mostrará por defecto
                            placeholder="Escribe aquí la descripción del juego"
                        />
                    </View>
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
                                   
                    </ScrollView>

                    </View>
                    
                   
                </ImageBackground>
            );
        }
        
const styles = StyleSheet.create({
backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    //alignItems: 'center',
    padding: 20,
            },
overlay: {
    ...StyleSheet.absoluteFillObject, // Ocupa todo el espacio del padre
    backgroundColor: 'black', // Color de la capa
    opacity: 0.5, // Ajusta la transparencia aquí
            },
            // otros estilos...
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
    paddingTop: 40,
    padding: 10,
    paddingBottom: 40,
    marginBottom: 20,
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



 {/*  
 
 
    <ImageBackground
                source={require('../images/Home_Background_Animation00.png')}
                style={styles.backgroundImage}
            >
            <Navbar title="Crear Partida" />
            </ImageBackground>
 
 
 <View style={styles.generalContainer}>
            <Navbar title="Crear Partida" />
                <ScrollView style={{backgroundColor: 'blue', zIndex: -222, width: '100%', marginBottom: '35%', height: '60%'}}>
                    <CoverImgSelector/>
                    <View style={styles.titleContainer}>
                           <Text style={styles.lbl}>Título (obligatorio)</Text>
                           <TextInput
                                style={styles.title} // Estilo para el campo de entrada
                                placeholder="Ingresa un título único que no se repita"
                            />
                    </View>
                    <View style={styles.descriptionContainer}>
                           <Text style={styles.lbl}>Descripción</Text>
                           <View style={styles.container}>
                                <TextInput style={styles.description} />
                           </View>
                    </View>
                </ScrollView>
            

           
        </View>*/}