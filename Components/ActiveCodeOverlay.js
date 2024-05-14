import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const ActiveCodeOverlay = ({ code, onCodeChange, onAccept, onTogglePanel }) => {
    return (
        <View style={styles.container}>
            <View style={styles.overlayTitle}>
                <Text style={{ fontWeight: "bold", fontSize: 35, color: "white" }}>Código de la pista</Text>
                <Text style={{ color: "#60986e", fontWeight: "bold", fontSize: 15 }}>Introduce un código de juego</Text>
            </View>
            <View style={styles.panelAbsolute}>
                <Text style={styles.text1}>Tu código:</Text>
                <TextInput
                    style={styles.text3}
                    value={code}
                    onChangeText={onCodeChange}
                    numberOfLines={1}
                    ellipsizeMode="tail"
                    maxLength={6}
                    autoCapitalize="characters"
                />
            </View>
            <TouchableOpacity style={styles.acceptButton} onPress={onAccept}>
                <Text style={{ color: "white", fontSize: 25, fontWeight: 'bold' }}>ACEPTAR</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    // Incluye aquí los estilos específicos para este componente
    container: {
        // Estilos necesarios
    },
    overlayTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        position: "absolute",
        zIndex: 9999,
    },
    panelAbsolute: {
        backgroundColor: "#003B2C",
        alignSelf: 'center',
        borderRadius: 20,
        padding: 5,
        alignItems: 'center',
        zIndex: 99999,
    },
    text1: {
        color: "#ffffff",
        fontSize: 18,
    },
    text3: {
        color: "#ffffff",
        fontSize: 40,
        fontWeight: 'bold',
        paddingHorizontal: 15,
        width: "100%",
        textAlign: "center",
    },
    acceptButton: {
        backgroundColor: "#ffb708",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        padding: 8,
        paddingHorizontal: 40,
        zIndex: 99999,
    },
});

export default ActiveCodeOverlay;
