import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import CoverImgSelector from '../Components/CoverImgSelector';



NewGameScreen = ({ navigation }) => {
    return(
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
    paddingTop: 20,
},
coverImgContainer: {
    width: '100%',
    height: '25%',
   // backgroundColor: 'red',
},
lbl: {
    fontSize: 16,
    padding: 10,
},
container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    borderRadius: 20,
},
titleContainer: {
    marginTop: '15%',
    width: '100%',
    height: '15%',
   // backgroundColor: 'yellow',
},
title: {
    width: '100%',
    height: '50%',
    borderRadius: 30,
    backgroundColor: 'grey',
    padding: 10,
},
descriptionContainer: {
  //  backgroundColor: 'red',
    width: '100%',
    height: '30%',

},
description: {
    padding: 10,

},

});

export default NewGameScreen;