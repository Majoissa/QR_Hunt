import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const DescriptionInput = () => {
    return (
        <View style={styles.descriptionContainer}>
            <Text style={styles.label}>Descripción</Text>
            <TextInput
                style={styles.inputDescription}
                multiline={true} // Permite que el campo de texto acepte múltiples líneas
                numberOfLines={4} // Define el número de líneas que el campo de texto mostrará por defecto
                placeholder="Escribe aquí la descripción del juego"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    descriptionContainer: {
        width: '100%',
    },
    label: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputDescription: {
        backgroundColor: '#C0C0C0',
        borderWidth: 1,
        borderColor: '#C0C0C0',
        borderRadius: 15,
        paddingTop: 30,
        padding: 10,
        paddingBottom: 30,
        marginBottom: 30,
        textAlignVertical: 'top', // Alinea el texto en la parte superior para campos de texto multilínea
        minHeight: 100, // Altura mínima para dar espacio suficiente para escribir
    },
});

export default DescriptionInput;
