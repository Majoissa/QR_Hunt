import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ImageBackground } from 'react-native';
import CoverImgSelector from '../Components/CoverImgSelector';



NewGameScreen = ({ navigation }) => {
    return(
        <ImageBackground
        source={require('../images/Home_Background_Animation00.png')}
        style={styles.backgroundImage}
    >
            <View style={styles.generalContainer}>
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
                        <TextInput
                        style={styles.description}
                                    
                    />
                    </View>
                </View>
            </View>

        </ImageBackground>

    );
}

const styles = StyleSheet.create({
generalContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    ...StyleSheet.absoluteFillObject, // Ocupa todo el espacio disponible
    backgroundColor: 'rgba(0, 0, 0, 0.8)', // Color oscuro con opacidad
   // paddingTop: 20,
},
backgroundImage: {
    flex: 1, // Ocupa todo el espacio disponible
    resizeMode: 'cover', // Ajusta la imagen al tamaño del contenedor
    justifyContent: 'center', // Centra el contenido verticalmente
    alignItems: 'center', // Centra el contenido horizontalmente  
},

coverImgContainer: {
    width: '100%',
    height: '25%',
   // backgroundColor: 'red',
},
lbl: {
    fontSize: 18,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
},
container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    borderRadius: 20,
},
titleContainer: {
    marginTop: '12%',
    width: '100%',
},
title: {
    width: '100%',
    borderRadius: 30,
    backgroundColor: 'grey',
    padding: 10,
   },
descriptionContainer: {
    width: '100%',
    height: '30%',
},
description: {
    padding: 10,
    width: '100%',
    height: '100%',
},

});

export default NewGameScreen;