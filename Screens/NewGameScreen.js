import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

NewGameScreen = ({ navigation }) => {

    return(
        <View style={styles.generalContainer}>
            <View style={styles.coverImgContainer}>
                <Text style={styles.lbl}>Imagen de portada (opcional)</Text>
                <View style={styles.imgContainer}>

                </View>

            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.lbl}>Título (obligatorio)</Text>
                <View style={styles.title}>

                </View>

            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.lbl}>Descripción</Text>
                <View style={styles.description}>

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
    backgroundColor: 'red',
},
lbl: {
    fontSize: 16,
    padding: 10,
},
imgContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
    borderRadius: 20,
},
titleContainer: {
    marginTop: '15%',
    width: '100%',
    height: '15%',
    backgroundColor: 'yellow',
},
title: {
    width: '100%',
    height: '50%',
    borderRadius: 30,
    backgroundColor: 'pink',
},
descriptionContainer: {

},
description: {

},

});

export default NewGameScreen;