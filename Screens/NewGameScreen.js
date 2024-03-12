import React, { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Alert } from 'react-native';
import CoverImgSelector from '../Components/CoverImgSelector';



NewGameScreen = ({ navigation }) => {
   

    return(
        <View style={styles.generalContainer}>
             <CoverImgSelector/>
            <View style={styles.titleContainer}>
                <Text style={styles.lbl}>Título (obligatorio)</Text>
                <View style={styles.title}>

                </View>

            </View>
            <View style={styles.descriptionContainer}>
                <Text style={styles.lbl}>Descripción</Text>
                <View style={styles.container}>

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
container: {
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
    backgroundColor: 'red',
    width: '100%',
    height: '30%',

},
description: {

},

});

export default NewGameScreen;