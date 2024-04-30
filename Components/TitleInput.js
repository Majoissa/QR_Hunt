import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TitleInput = () => {
    return (
        <View style={styles.titleContainer}>
            <Text style={styles.label}>Título (obligatorio)</Text>
            <TextInput
                style={styles.inputTitle}
                placeholder="Ingresa un título único que no se repita"
            />
        </View>
    );
}

const styles = StyleSheet.create({
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
        backgroundColor: '#C0C0C0', // Fondo gris para mayor visibilidad
        borderWidth: 1, // Borde sutil para el campo de entrada
        borderColor: '#C0C0C0', // Color del borde
        borderRadius: 15, // Bordes redondeados
        padding: 10, // Espacio interior
    },
});

export default TitleInput;
